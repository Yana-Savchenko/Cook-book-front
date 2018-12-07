import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeHttpService } from '../../core/services/recipe-http.service';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss']
})
export class UserRecipesComponent implements OnInit {

  private recipes = [];
  private user = {
    firstName: '',
    lastName: '',
  }
  private headerText:string = '';
  private userId:string = '';

  constructor(private route: ActivatedRoute, private httpService:RecipeHttpService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    this.httpService.getUserRecipes(this.userId)
      .subscribe(
        (data: any) => {
          this.recipes = data;
          this.user.firstName = this.recipes[0].user.firstName;
          this.user.lastName = this.recipes[0].user.lastName;
          this.headerText = `${this.user.firstName} ${this.user.lastName} recipes`;
        })
  }

}
