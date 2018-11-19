import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  providers: [NgbRatingConfig]
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe = null;

  @Output() buttonPress = new EventEmitter();
  
  private servUrl = environment.serverUrl;
  
  constructor(config: NgbRatingConfig) {
    config.readonly = true;
   }

  ngOnInit() {
    switch(this.recipe.cooking_time) {
      case("0.25"): {
        this.recipe.cooking_time = 'up to 15 minutes';
        break;
      }
      case("0.5"): {
        this.recipe.cooking_time = 'up to 30 minutes';
        break;
      }
      case("1"): {
        this.recipe.cooking_time = 'up to 1 hour';
        break;
      }
      case("1.5"): {
        this.recipe.cooking_time = 'up to 1.5 hours';
        break;
      }
      case("2"): {
        this.recipe.cooking_time = 'up to 2 hours';
        break;
      }
      case("2.1"): {
        this.recipe.cooking_time = 'over 2 hours';
        break;
      }
    }
  }

  onButtonPress() {
    this.buttonPress.emit("hello world")
  }

}
