import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface profileinfo {
  Name: string;
  Birthday: string;
  Gender: string;
  Marital: string;
}
export interface Logininfo {
  Mobile: Number;
  Email: string;
  Password: string;
}
@Component({
  selector: 'app-profilemain',
  templateUrl: './profilemain.component.html',
  styleUrls: ['./profilemain.component.scss']
})
export class ProfilemainComponent implements OnInit {
profile:profileinfo;logininf:Logininfo;
profileformGroup:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.ProfileForm();
    this.profile ={
      Name:"chandan",
      Birthday:"22 Nov 1996",
      Gender:"Male",
      Marital:"non"
    }
    this.logininf ={
      Mobile:8660412702,
      Email:"dvlpchnadan@gmail.com",
      Password:"******"
    }
  }
  get s() {
    return this.profileformGroup.controls;
  }
  ProfileForm(){
    this.profileformGroup = new FormGroup({
      Name: new FormControl("",Validators.required),
      Birthday: new FormControl(""),
      Gender: new FormControl("",Validators.required),
      Marital: new FormControl("")
    });
  }
  Profilesub(){

  }
}
