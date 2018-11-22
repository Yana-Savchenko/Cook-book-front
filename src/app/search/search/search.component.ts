import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { SearchHttpService } from '../../core/services/search-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private headerText: string = 'Search results';
  private recipes = [];

  constructor(private route: ActivatedRoute, private searchService: SearchHttpService) { }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        return this.searchService.searchRecipes(params.get('search_data'));
      })
    )
      .subscribe(
        (data: any) => {
          this.recipes = data;
          console.log(this.recipes);
        })
  }

}
