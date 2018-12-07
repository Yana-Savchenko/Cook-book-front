import { Component, OnInit } from '@angular/core';

import { RecipeHttpService } from '../../core/services/recipe-http.service';

@Component({
  selector: 'app-dinner-recipes',
  templateUrl: './dinner-recipes.component.html',
  styleUrls: ['./dinner-recipes.component.scss']
})
export class DinnerRecipesComponent implements OnInit {

  private headerText:string = 'Dinner';
  private recipes = [];
  private category = 4;

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
