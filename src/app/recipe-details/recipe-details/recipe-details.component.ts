import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import { RecipeHttpService, RecipeDetails } from '../../core/services/recipe-http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  providers: [NgbRatingConfig]
})
export class RecipeDetailsComponent implements OnInit {

  private favoriteButton = 'Add to favorites';
  private recipe: RecipeDetails = {
    title: '',
    content: '',
    category: '',
    complexity: '',
    cookingTime: '',
    dishPhoto: {
      name: '',
      path: '',
    },
    isLiked: false,
  };
  private servUrl: string = environment.serverUrl;


  constructor(private route: ActivatedRoute, private httpService: RecipeHttpService, config: NgbRatingConfig) { 
    config.readonly = true;
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.httpService.getRecipeDetails(params.get('id'))
      })
    )
      .subscribe(
        (data: RecipeDetails) => {
          this.recipe = data;
          switch(this.recipe.cookingTime) {
            case("0.25"): {
              this.recipe.cookingTime = 'up to 15 minutes';
              break;
            }
            case("0.5"): {
              this.recipe.cookingTime = 'up to 30 minutes';
              break;
            }
            case("1"): {
              this.recipe.cookingTime = 'up to 1 hour';
              break;
            }
            case("1.5"): {
              this.recipe.cookingTime = 'up to 1.5 hours';
              break;
            }
            case("2"): {
              this.recipe.cookingTime = 'up to 2 hours';
              break;
            }
            case("2.1"): {
              this.recipe.cookingTime = 'over 2 hours';
              break;
            }
          };
          if (this.recipe.isLiked) {
            this.favoriteButton = 'Remove from favorites';
          }
        },
        (err) => { console.log('error is', err.message) }
      )
  }

  toggleFavorite() {

  }

}
