import { Component, OnInit } from '@angular/core';

import { HomeHttpService } from '../../core/services/home-http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private recipes = [];
  private servUrl = environment.serverUrl;
  private headerText:string = 'Recently added';
  
  constructor(private httpService: HomeHttpService,) { }

  ngOnInit() {
    this.httpService.getHome().subscribe(
      (data: any) => {
        this.recipes = data;
      },
      error => console.log(error)
    );
  }

}
