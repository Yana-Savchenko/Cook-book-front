import { Component, OnInit } from '@angular/core';

import { RecipeHttpService } from '../../core/services/recipe-http.service';

@Component({
  selector: 'app-drinks-recipes',
  templateUrl: './drinks-recipes.component.html',
  styleUrls: ['./drinks-recipes.component.scss']
})
export class DrinksRecipesComponent implements OnInit {

  private headerText: string = 'Drinks';
  private recipes = [];
  private category = 5;
  constructor(private httpService: RecipeHttpService) { }

  ngOnInit() {
    this.httpService.getCategryRecipes(this.category).subscribe(
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
