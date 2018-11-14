import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }

  @Input() userData = {};

  @Output() edit = new EventEmitter<boolean>()

  editProfile() {
    this.edit.emit(false);
  }

  ngOnInit() {
  }

}
