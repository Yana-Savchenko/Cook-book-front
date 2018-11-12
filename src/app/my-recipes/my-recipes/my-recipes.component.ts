import { Component, OnInit } from '@angular/core';

import { RecipeHttpService } from '../../core/services/recipe-http.service';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {

  private headerText:string = 'My recipes';
  private recipes = [];
  private servUrl = environment.serverUrl;

  constructor(private httpService: RecipeHttpService,) { }

  ngOnInit() {
    this.httpService.getMyRecipes().subscribe(
      (data: any) => {
        this.recipes = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }
}
