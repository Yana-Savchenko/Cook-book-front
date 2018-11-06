import { Component, OnInit } from '@angular/core';

import { HomeHttpService } from '../core/services/home-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HomeHttpService,) { }

  ngOnInit() {
    this.httpService.getHome().subscribe(
      (data: any) => {
        console.log(data);
      },
      error => console.log(error)
    );
  }

}
