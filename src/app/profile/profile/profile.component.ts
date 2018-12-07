import { Component, OnInit } from '@angular/core';

import { ProfileHttpService, User } from '../../core/services/profile-http.service';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs'

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
  private errMessage = "";

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
    this.visibility = event;
  }

  saveEdits(event) {
    this.httpService.updateUserData(event)
      .pipe(
        catchError(error => {
          if (error.status === 400) {
            this.errMessage = error.error.message;
          }
          throw error;
        }),
        switchMap(() => {
          this.visibility = true;
          return this.httpService.getUserData();
        }),
      )
      .subscribe(
        (data: User) => {
          this.userData = data;
        },
        error => {
          console.log(error)
        },
      );
  }

  changeAvatar(e) {
    this.httpService.updateAvatar(e).subscribe(
      (data: any) => {
        this.userData.avatar = data.path;
      },
      error => console.log(error)
    );
  }
}
