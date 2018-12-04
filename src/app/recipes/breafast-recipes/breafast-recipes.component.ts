import { Component, OnInit } from '@angular/core';

import { RecipeHttpService } from '../../core/services/recipe-http.service';

@Component({
  selector: 'app-breafast-recipes',
  templateUrl: './breafast-recipes.component.html',
  styleUrls: ['./breafast-recipes.component.scss']
})
export class BreafastRecipesComponent implements OnInit {

  private headerText:string = 'Breakfast&Brunch';
  private recipes = [];

  constructor(private httpService: RecipeHttpService) { }
  

  ngOnInit() {
    this.httpService.getCategryRecipes(2).subscribe(
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
