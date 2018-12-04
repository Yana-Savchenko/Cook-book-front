import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SearchHttpService } from '../../core/services/search-http.service';

@Component({
  selector: 'app-sort-and-filter',
  templateUrl: './sort-and-filter.component.html',
  styleUrls: ['./sort-and-filter.component.scss']
})
export class SortAndFilterComponent implements OnInit {

  private complexity = {
    up: false,
    down: false
  };
  private cooking_time = {
    up: false,
    down: false
  };
  private currentComplexity = 0;
  private currentTime = '';
  private searchParams = {
    search_data: '',
    sortCategory: '0',
    sortComplexity: null,
    sortTime: null,
    complexityFilter: 0,
    timeFilter: '',
  }

  constructor(private searchService: SearchHttpService) { }

  @Input() search_data="";
  @Input() disabled = false;
  @Input() category = '0';
  @Output() searchRes = new EventEmitter<any>();

  ngOnInit() {
    this.searchParams.search_data = this.search_data;
    this.searchParams.sortCategory = this.category;
  }

  search(event) {
    if (event.keyCode === 13) {
      this.searchParams.search_data = this.search_data;
      this.searchService.searchRecipes(this.searchParams)
        .subscribe(
          (data: any) => {
            this.searchRes.emit(data);
          })
    }
  }
  categoryChange() {
    this.searchParams.sortCategory = this.category;
    this.searchService.searchRecipes(this.searchParams)
      .subscribe(
        (data: any) => {
          this.searchRes.emit(data);
        })
  }

  sortComplexity() {
    if (this.complexity.down) {
      this.complexity.down = false;
      this.complexity.up = true;
      this.searchParams.sortTime = '';
      this.searchParams.sortComplexity = 'down';
    } else {
      this.complexity.down = true;
      this.complexity.up = false;
      this.cooking_time.up = false;
      this.cooking_time.down = false;
      this.searchParams.sortTime = '';
      this.searchParams.sortComplexity = 'up';
    }

    this.searchService.searchRecipes(this.searchParams)
      .subscribe(
        (data: any) => {
          this.searchRes.emit(data);
        })
  }

  sortTime() {
    if (this.cooking_time.down) {
      this.cooking_time.down = false;
      this.cooking_time.up = true;
      this.searchParams.sortComplexity = '';
      this.searchParams.sortTime = 'down';
    } else {
      this.cooking_time.down = true;
      this.cooking_time.up = false;
      this.complexity.up = false;
      this.complexity.down = false;
      this.searchParams.sortComplexity = '';
      this.searchParams.sortTime = 'up';
    }
    this.searchService.searchRecipes(this.searchParams)
      .subscribe(
        (data: any) => {
          this.searchRes.emit(data);
        })
  }

  complexityChange(event) {
    this.searchParams.complexityFilter = this.currentComplexity;
    this.searchService.searchRecipes(this.searchParams)
      .subscribe(
        (data: any) => {
          this.searchRes.emit(data);
        })
  }

  cookingTimeChange() {
    this.searchParams.timeFilter = this.currentTime;
    this.searchService.searchRecipes(this.searchParams)
      .subscribe(
        (data: any) => {
          this.searchRes.emit(data);
        })
  }
}
