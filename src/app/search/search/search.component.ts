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
  private searchParams = {
    search_data: '',
    sortCategory: '0',
    sortComplexity: null,
    sortTime: null,
    complexityFilter: 0,
    timeFilter: '',
  }

  constructor(private route: ActivatedRoute, private searchService: SearchHttpService) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        this.searchParams.search_data = params.get('search_data')
        return this.searchService.searchRecipes(this.searchParams);
      })
    )
      .subscribe(
        (data: any) => {
          this.recipes = data;
        })
  }

  searchResults(event) {
    this.recipes = event;
  }
}
