import { Component, OnInit } from '@angular/core';

import { ProfileHttpService, User } from '../../core/services/profile-http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private headerText: string = 'My profile';
  private visibility: boolean = true;
  private isChangeAvatar: boolean = false;
  private userData: User = {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    avatar: '',
  };
  private avatar: string = '';

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

  editProfile(event) {

    this.visibility = event;

  }

  cancelEdits(event) {

    console.log('ok');
    this.visibility = event;

  }

  saveEdits(event) {

    this.httpService.updateUserData(event).subscribe(
      () => {
        this.visibility = true;
        this.httpService.getUserData().subscribe(
          (data: User) => {
            console.log(data);
            this.userData = data;
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }

  changeAvatar(e) {
    console.log(e);
    this.httpService.updateAvatar(e).subscribe(
      (data: any) => {
        this.userData.avatar = data.path;
      },
      error => console.log(error)
    );
  }
}
