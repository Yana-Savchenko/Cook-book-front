import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss']
})
export class ProfileAvatarComponent implements OnInit {

  private avatarPath:string = '';
  private isChangeAvatar:boolean = true;
  private file = null;
  private avatarFile:FormData = new FormData();
  private  servUrl = environment.serverUrl;

  constructor() { }

  @Input() avatar:string;
  @Output() newAvatar = new EventEmitter<FormData>();

  ngOnInit() {
  }

    changeAvatar(e) {
      this.isChangeAvatar = false;
      this.file = e.currentTarget.files[0];
      this.avatarPath = this.file.name;
    }

    saveAvatar() {
      this.isChangeAvatar = true;
      this.avatarFile.append("avatar", this.file);
      this.newAvatar.emit(this.avatarFile);
    }
}
