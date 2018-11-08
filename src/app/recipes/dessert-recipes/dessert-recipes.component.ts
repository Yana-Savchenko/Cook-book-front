import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dessert-recipes',
  templateUrl: './dessert-recipes.component.html',
  styleUrls: ['./dessert-recipes.component.scss']
})
export class DessertRecipesComponent implements OnInit {

  private headerText:string = 'Dessert';

  constructor() { }

  ngOnInit() {
  }

}
