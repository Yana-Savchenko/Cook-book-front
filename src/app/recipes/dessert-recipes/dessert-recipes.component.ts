import { Component, OnInit } from '@angular/core';

import { RecipeHttpService } from '../../core/services/recipe-http.service';

@Component({
  selector: 'app-dessert-recipes',
  templateUrl: './dessert-recipes.component.html',
  styleUrls: ['./dessert-recipes.component.scss']
})
export class DessertRecipesComponent implements OnInit {

  private headerText: string = 'Dessert';
  private recipes = [];

  constructor(private httpService: RecipeHttpService) { }

  ngOnInit() {
    this.httpService.getCategryRecipes(3).subscribe(
      (data: any) => {
        this.recipes = data;
      },
      error => console.log(error)
    );
  }
  searchResults(event) {
    this.recipes = event;
  }
}
