import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-and-filter',
  templateUrl: './sort-and-filter.component.html',
  styleUrls: ['./sort-and-filter.component.scss']
})
export class SortAndFilterComponent implements OnInit {

  private category = '0';
  private complexity = {
    up: false,
    down: false
  };
  private cooking_time = {
    up: false,
    down: false
  };

  constructor() { }

  @Input() search_data;
  @Output() sortByCategory = new EventEmitter<string>();
  @Output() sortByComplexity = new EventEmitter<string>();
  @Output() sortByTime = new EventEmitter<string>();
  @Output() newSearchData = new EventEmitter<string>();

  ngOnInit() {
  }

  search(event) {
    if (event.keyCode === 13) {
      this.newSearchData.emit(this.search_data);
    }
  }
  categoryChange() {
    this.sortByCategory.emit(this.category);
  }

  sortComplexity() {
    if (this.complexity.down) {
      this.complexity.down = false;
      this.complexity.up = true;
      this.sortByTime.emit('');
      this.sortByComplexity.emit('up');
    } else {
      this.complexity.down = true;
      this.complexity.up = false;
      this.cooking_time.up = false;
      this.cooking_time.down = false;
      this.sortByTime.emit('');
      this.sortByComplexity.emit('down');
    }

  }

  sortTime() {
    if (this.cooking_time.down) {
      this.cooking_time.down = false;
      this.cooking_time.up = true;
      this.sortByComplexity.emit('');
      this.sortByTime.emit('up');
    } else {
      this.cooking_time.down = true;
      this.cooking_time.up = false;
      this.complexity.up = false;
      this.complexity.down = false;
      this.sortByComplexity.emit('');
      this.sortByTime.emit('down');
    }
  }
}
