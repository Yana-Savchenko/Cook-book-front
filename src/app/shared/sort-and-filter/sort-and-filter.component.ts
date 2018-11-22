import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-and-filter',
  templateUrl: './sort-and-filter.component.html',
  styleUrls: ['./sort-and-filter.component.scss']
})
export class SortAndFilterComponent implements OnInit {

  private category = '0';

  constructor() { }

  @Input() search_data;
  @Output() sortByCategory = new EventEmitter<string>();

  ngOnInit() {
  }

  categoryChange() {
    console.log(this.category);
      this.sortByCategory.emit(this.category);
  }
}
