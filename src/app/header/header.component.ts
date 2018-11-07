import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthHttpService } from '../core/services/auth-http.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private isAuth = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthHttpService
  ) { }

  ngOnInit() {
    const subscription: Subscription = this.authService.isAuth$.subscribe((value: boolean) => {
      console.log('LOGGED IN')
      this.isAuth = value;
      console.log(value, this.isAuth);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    console.log('ON DESTROY HEADER')
    this.subscriptions.forEach((item: Subscription) => {
      item.unsubscribe();
    })
  }

}
