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
  private sortCategory = '0';
  private sortComplexity = '';
  private sortTime = '';

  constructor(private route: ActivatedRoute, private searchService: SearchHttpService) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        this.search_data = params.get('search_data')
        return this.searchService.searchRecipes(this.search_data, this.sortCategory, this.sortComplexity, this.sortTime);
      })
    )
      .subscribe(
        (data: any) => {
          this.recipes = data;
        })
  }

  sortByCategory(event) {
    console.log('cat', this.search_data);
    this.sortCategory = event;
    this.searchService.searchRecipes(this.search_data, this.sortCategory, this.sortComplexity, this.sortTime)
      .subscribe(
        (data: any) => {
          this.recipes = data;
        })
  }
  sortByComplexity(event) {
    this.sortComplexity = event;
    if (this.sortComplexity) {
      console.log('compl', this.search_data);
      this.searchService.searchRecipes(this.search_data, this.sortCategory, this.sortComplexity)
        .subscribe(
          (data: any) => {
            this.recipes = data;
          })
    }
  }
  sortByTime(event) {
    this.sortTime = event;
    if (this.sortTime) {
      console.log('time', this.search_data);
      this.searchService.searchRecipes(this.search_data, this.sortCategory, this.sortComplexity, this.sortTime)
        .subscribe(
          (data: any) => {
            this.recipes = data;
          })
    }
  }
  newSearchData(event) {
    this.search_data = event;
    this.searchService.searchRecipes(this.search_data, this.sortCategory, this.sortComplexity, this.sortTime)
        .subscribe(
          (data: any) => {
            this.recipes = data;
          })
  }
}
