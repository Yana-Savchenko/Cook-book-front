import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe = {};

  @Output() buttonPress = new EventEmitter();
  
  private servUrl = environment.serverUrl;
  
  constructor() { }

  ngOnInit() {
  }

  onButtonPress() {
    this.buttonPress.emit("hello world")
  }

}
