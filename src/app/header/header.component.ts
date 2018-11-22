import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthHttpService } from '../core/services/auth-http.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SearchHttpService } from '../core/services/search-http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private isAuth = false;
  private subscriptions: Subscription[] = [];
  private searchData: string = '';

  constructor(
    private authService: AuthHttpService,
    private searchService: SearchHttpService,
    private router: Router
  ) { }

  ngOnInit() {
    const subscription: Subscription = this.authService.isAuth$.subscribe((value: boolean) => {
      this.isAuth = value;
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((item: Subscription) => {
      item.unsubscribe();
    })
  }

  submit(event) {
    if (event.keyCode === 13 || event.type === 'click') {
      console.log(this.searchData);
      this.router.navigate(['/search'], {queryParams:{'search_data': this.searchData}});
      
    }
  }
}
