import { Component, OnInit } from '@angular/core';

import { RecipeHttpService } from '../../core/services/recipe-http.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  private headerText:string = 'All recipes';
  private recipes = [];

  constructor(private httpService: RecipeHttpService) { }

  ngOnInit() {
    this.httpService.getAllRecipes().subscribe(
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
