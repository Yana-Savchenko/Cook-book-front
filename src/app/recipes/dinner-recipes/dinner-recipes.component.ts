import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner-recipes',
  templateUrl: './dinner-recipes.component.html',
  styleUrls: ['./dinner-recipes.component.scss']
})
export class DinnerRecipesComponent implements OnInit {

  private headerText:string = 'Dinner';

  constructor() { }

  ngOnInit() {
  }

}
