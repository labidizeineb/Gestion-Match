import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
title : string = "Profile Info";
user : any ;
  constructor() { }

  ngOnInit() {
    let sessionToken = sessionStorage.getItem("token");
    if (sessionToken) {
      this.user = this.decodeToken(sessionToken);
      console.log("here information user", this.user);
    }
  }
  
  decodeToken(token: string) {
    return jwt_decode(token);
  }

}
