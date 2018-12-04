import { Component, OnInit } from '@angular/core';

import { RecipeHttpService } from '../../core/services/recipe-http.service';

@Component({
  selector: 'app-appetizers-recipes',
  templateUrl: './appetizers-recipes.component.html',
  styleUrls: ['./appetizers-recipes.component.scss']
})
export class AppetizersRecipesComponent implements OnInit {

  private headerText:string = 'Appetizers&Snack';
  private recipes = [];

  constructor(private httpService: RecipeHttpService) { }
  

  ngOnInit() {
    this.httpService.getCategryRecipes(1).subscribe(
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
