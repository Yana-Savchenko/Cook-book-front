import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { RecipeHttpService, RecipeDetails } from '../../core/services/recipe-http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {


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
  };
  private servUrl: string = environment.serverUrl;

  constructor(private route: ActivatedRoute, private httpService: RecipeHttpService) { }

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
          }
        },
        (err) => { console.log('error is', err.message) }
      )
  }

}
