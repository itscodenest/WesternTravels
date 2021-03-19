import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

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
export interface MemberDetail {
  Name: string;
  Birthday?: string;
  Gender: string;
  Mobile?: Number;
  Email?: string;
  PassportNo?:String;
}
@Component({
  selector: 'app-profilemain',
  templateUrl: './profilemain.component.html',
  styleUrls: ['./profilemain.component.scss']
})
export class ProfilemainComponent implements OnInit {
  profile: profileinfo; logininf: Logininfo;memberinfo:MemberDetail[];
  profileformGroup: FormGroup;LogindtformGroup:FormGroup;MembersformGroup:FormGroup;
  //phone country code custumisation starts
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  //phone country code custumisation ends
  @ViewChild('closeprofile') profileclose:ElementRef;
  @ViewChild('closeLogdetail') logindtclose:ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.ProfileForm();this.logdetails();
    this.profile = {
      Name: "chandan",
      Birthday: "22 Nov 1996",
      Gender: "Male",
      Marital: "non"
    }
    this.logininf = {
      Mobile: 8660412702,
      Email: "dvlpchnadan@gmail.com",
      Password: "******"
    }
    this.memberinfo =[
      {
      Name: "someone",
      Birthday: "21 aug 2000",
      Gender: "male",
      Mobile: 8565974564,
      Email: "someone@gmail.com",
      PassportNo:""
    }
  ]
  }

  //methods
  get s() {
    return this.profileformGroup.controls;
  }
  /////////////////////////form creation part///////////////////////////
  ProfileForm() {
    this.profileformGroup = new FormGroup({
      Name: new FormControl("", Validators.required),
      Birthday: new FormControl(""),
      Gender: new FormControl("", Validators.required),
      Marital: new FormControl("")
    });
  }
 
  logdetails(){
    this.LogindtformGroup = new  FormGroup({
      Email: new FormControl("", Validators.required),
      Phone: new FormControl(undefined, [Validators.required]),
    });
  }

  addmembers(){
this.MembersformGroup = new FormGroup({
  Name: new FormControl("", Validators.required),
  Birthday: new FormControl(""),
  Gender: new FormControl("", Validators.required),
  Email: new FormControl(""),
  Phone: new FormControl(undefined, [Validators.required]),
  PassportNo:new FormControl("")
});
  }
  /////////////////////////submit results//////////////////////////////
  Profilesub() {
    if (this.profileformGroup.valid) {
      console.log(this.profileformGroup.value.Name)
      this.profileclose.nativeElement.click()
    }
    else {

    }
  }
  Loginsub(){
    if (this.LogindtformGroup.valid) {
      console.log(this.LogindtformGroup.value.Phone.internationalNumber)
      this.logindtclose.nativeElement.click()
    }
    else {

    }
  }
  membersub(){
    if (this.MembersformGroup.valid) {
      console.log(this.MembersformGroup.value.Phone.internationalNumber)
      this.logindtclose.nativeElement.click()
    }
    else {

    }
  }
}
