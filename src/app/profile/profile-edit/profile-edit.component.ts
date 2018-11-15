import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../core/services/profile-http.service';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  profile: FormGroup;
  
  constructor() {
  }

  @Input() userData:User;

  @Output() cancel = new EventEmitter<boolean>();
  @Output() newData = new EventEmitter<FormGroup>();



  ngOnInit() {
    this.profile = new FormGroup({
      "firstName": new FormControl(this.userData.firstName, Validators.required),
      "lastName": new FormControl(this.userData.lastName, Validators.required),
      "email": new FormControl(this.userData.email, Validators.required),
      "age": new FormControl(this.userData.age, Validators.required),
    });
  }

  saveEdits() {
    console.log(this.profile);
    this.newData.emit(this.profile.value);
  }

  cancelEdits() {
    console.log('cancel')
    this.cancel.emit(true);
  }
}
