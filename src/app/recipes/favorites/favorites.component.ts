import { Component, OnInit } from '@angular/core';

import { RecipeHttpService } from '../../core/services/recipe-http.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  private recipes = [];
  private headerText:string = 'Favorites';

  constructor(private httpService:RecipeHttpService) {  }

  ngOnInit() {
    this.httpService.getFavoriteRecipes().subscribe(
      (data: any) => {
        this.recipes = data;
        console.log(this.recipes);
      },
      error => console.log(error)
    );
  }

}
