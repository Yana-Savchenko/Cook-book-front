import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../../../environments/environment';
import { RecipeHttpService } from '../../core/services/recipe-http.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  providers: [NgbRatingConfig]
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe = null;

  @Output() isLiked = new EventEmitter();

  private servUrl = environment.serverUrl;
  private favorite = false;
  constructor(config: NgbRatingConfig, private httpService: RecipeHttpService) {
    config.readonly = true;
  }

  ngOnInit() {
    switch (this.recipe.cooking_time) {
      case ("0.25"): {
        this.recipe.cooking_time = 'up to 15 minutes';
        break;
      }
      case ("0.5"): {
        this.recipe.cooking_time = 'up to 30 minutes';
        break;
      }
      case ("1"): {
        this.recipe.cooking_time = 'up to 1 hour';
        break;
      }
      case ("1.5"): {
        this.recipe.cooking_time = 'up to 1.5 hours';
        break;
      }
      case ("2"): {
        this.recipe.cooking_time = 'up to 2 hours';
        break;
      }
      case ("2.1"): {
        this.recipe.cooking_time = 'over 2 hours';
        break;
      }
    }
    this.favorite = this.recipe.isLiked;
  }

  toggleFavorite() {
    if (this.favorite) {
      this.httpService.deleteFavoriteRecipes(this.recipe.id).subscribe(
        (data: any) => {
          console.log(data);
          this.favorite = !this.favorite;
        },
        error => console.log(error)
      );

    } else {
      console.log(this.recipe.id);
      const body = { recipe_id: this.recipe.id };
      this.httpService.postFavoriteRecipes(body).subscribe(
        (data: any) => {
          console.log(data);
          this.favorite = !this.favorite;
        },
        error => console.log(error)
      );
    }
  }

}
