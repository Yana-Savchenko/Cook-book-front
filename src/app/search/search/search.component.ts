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
  // private searchParams.search_data = '';
  private sortCategory = '0';
  private sortComplexity = '';
  private sortTime = '';
  private complexityFilter = 0;
  private timeFilter = '';

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

  sortByCategory(event) {
    this.searchParams.sortCategory = event;
    this.searchService.searchRecipes(this.searchParams)
      .subscribe(
        (data: any) => {
          this.recipes = data;
        })
  }
  sortByComplexity(event) {
    this.searchParams.sortComplexity = event;
    if (this.searchParams.sortComplexity) {
      this.searchService.searchRecipes(this.searchParams)
        .subscribe(
          (data: any) => {
            this.recipes = data;
          })
    }
  }
  sortByTime(event) {
    this.searchParams.sortTime = event;
    if (this.searchParams.sortTime) {
      this.searchService.searchRecipes(this.searchParams)
        .subscribe(
          (data: any) => {
            this.recipes = data;
          })
    }
  }
  newSearchData(event) {
    this.searchParams.search_data = event;
    this.searchService.searchRecipes(this.searchParams)
      .subscribe(
        (data: any) => {
          this.recipes = data;
        })
  }
  filterByComplexity(event) {
    this.searchParams.complexityFilter = event;
    this.searchService.searchRecipes(this.searchParams)
      .subscribe(
        (data: any) => {
          this.recipes = data;
        })
  }
  filterByTime(event) {
    this.searchParams.timeFilter = event;
    this.searchService.searchRecipes(this.searchParams)
      .subscribe(
        (data: any) => {
          this.recipes = data;
        })
  }
}
