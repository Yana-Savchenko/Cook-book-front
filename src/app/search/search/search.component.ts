import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as _ from 'lodash';

import { SearchHttpService } from '../../core/services/search-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private headerText: string = 'Search results';
  private recipes = [];
  private search_data = '';

  constructor(private route: ActivatedRoute, private searchService: SearchHttpService) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        this.search_data = params.get('search_data')
        return this.searchService.searchRecipes(this.search_data);
      })
    )
      .subscribe(
        (data: any) => {
          this.recipes = data;
          console.log(this.recipes);
        })
  }

  sortByCategory(event) {
    console.log('sort', event);
    // this.recipes = _.filter(this.recipes, { 'category_id': parseInt(event) });
    this.searchService.searchRecipes(this.search_data, event)
      .subscribe(
        (data: any) => {
          this.recipes = data;
          console.log(this.recipes);
        })
  }

}
