import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  private headerText:string = 'All recipes';
  constructor() { }

  ngOnInit() {
  }

}
