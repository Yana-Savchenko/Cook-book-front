import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.scss']
})
export class CategoryNavComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this._router.navigateByUrl('/profile');
  }

}
