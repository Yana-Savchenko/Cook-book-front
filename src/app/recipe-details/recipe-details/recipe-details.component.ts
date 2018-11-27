import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

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
  private isEdit = false;
  private recipeId = null;
  private recipe: RecipeDetails = {
    title: '',
    content: '',
    category: '',
    category_id: 1,
    complexity: 1,
    cookingTime: '',
    cookingTimeText: '',
    dishPhoto: {
      name: '',
      path: '',
    },
    isLiked: false,
    isEdit: false,
  };
  private servUrl: string = environment.serverUrl;


  constructor(

    private route: ActivatedRoute,
    private httpService: RecipeHttpService,
    config: NgbRatingConfig,
    private router: Router
  ) {
    config.readonly = true;

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.recipeId = params.get('id');
        return this.httpService.getRecipeDetails(this.recipeId);
      })
    )
      .subscribe(
        (data: RecipeDetails) => {
          console.log(data);
          this.recipe = data;
          switch (this.recipe.cookingTime) {
            case ("0.25"): {
              this.recipe.cookingTimeText = 'up to 15 minutes';
              break;
            }
            case ("0.5"): {
              this.recipe.cookingTimeText = 'up to 30 minutes';
              break;
            }
            case ("1"): {
              this.recipe.cookingTimeText = 'up to 1 hour';
              break;
            }
            case ("1.5"): {
              this.recipe.cookingTimeText = 'up to 1.5 hours';
              break;
            }
            case ("2"): {
              this.recipe.cookingTimeText = 'up to 2 hours';
              break;
            }
            case ("2.1"): {
              this.recipe.cookingTimeText = 'over 2 hours';
              break;
            }
          };
        },
        (err) => { console.log('error is', err.message) }
      )
  }

  toggleFavorite() {

  }
  editRecipe() {
    this.isEdit = true;
  }
  cancelEdit(event) {
    this.isEdit = event;
  }
  updCompleted(event) {
    this.isEdit = event;
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.recipeId = params.get('id');
        return this.httpService.getRecipeDetails(this.recipeId);
      })
    )
      .subscribe(
        (data: RecipeDetails) => {
          console.log(data);
          this.recipe = data;
          switch (this.recipe.cookingTime) {
            case ("0.25"): {
              this.recipe.cookingTimeText = 'up to 15 minutes';
              break;
            }
            case ("0.5"): {
              this.recipe.cookingTimeText = 'up to 30 minutes';
              break;
            }
            case ("1"): {
              this.recipe.cookingTimeText = 'up to 1 hour';
              break;
            }
            case ("1.5"): {
              this.recipe.cookingTimeText = 'up to 1.5 hours';
              break;
            }
            case ("2"): {
              this.recipe.cookingTimeText = 'up to 2 hours';
              break;
            }
            case ("2.1"): {
              this.recipe.cookingTimeText = 'over 2 hours';
              break;
            }
          };
        },
        (err) => { console.log('error is', err.message) }
      )
  }
}
