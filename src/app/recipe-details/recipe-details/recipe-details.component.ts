import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { RecipeHttpService, RecipeDetails } from '../../core/services/recipe-http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {


  private recipe:RecipeDetails = null;
  private servUrl:string = environment.serverUrl; 

  constructor(private route: ActivatedRoute, private httpService: RecipeHttpService) {
    console.log('DETAILS LOADING wow so cool')

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params)
        console.log(params.get('id'))
        return this.httpService.getRecipeDetails(params.get('id'))
      })
    )
    .subscribe(
      (data:RecipeDetails) => {
        this.recipe = data;
      }, 
      (err) => { console.log('error is', err.message)}
    )
  }

}
