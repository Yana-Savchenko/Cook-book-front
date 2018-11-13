import { Component, OnInit } from '@angular/core';

import { ProfileHttpService, User } from '../../core/services/profile-http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private headerText: string = 'My profile';
  private userData: User = {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
  };

  constructor(private httpService: ProfileHttpService) { }

  ngOnInit() {

    this.httpService.getUserData().subscribe(
      (data: User) => {
        console.log(data);
        this.userData = data;
      },
      error => console.log(error)
    );

  }

}
