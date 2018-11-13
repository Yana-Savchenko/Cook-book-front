import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }
@Input () userData = {};
  ngOnInit() {
  }

}
