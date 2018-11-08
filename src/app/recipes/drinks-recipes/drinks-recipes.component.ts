import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks-recipes',
  templateUrl: './drinks-recipes.component.html',
  styleUrls: ['./drinks-recipes.component.scss']
})
export class DrinksRecipesComponent implements OnInit {

  private headerText:string = 'Drinks';

  constructor() { }

  ngOnInit() {
  }

}
