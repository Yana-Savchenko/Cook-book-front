import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {

  private headerText:string = 'My recipes';

  constructor() { }

  ngOnInit() {
  }
}
