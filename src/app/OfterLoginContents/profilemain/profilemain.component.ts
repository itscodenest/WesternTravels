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
@Component({
  selector: 'app-profilemain',
  templateUrl: './profilemain.component.html',
  styleUrls: ['./profilemain.component.scss']
})
export class ProfilemainComponent implements OnInit {
  profile: profileinfo; logininf: Logininfo;
  profileformGroup: FormGroup;LogindtformGroup:FormGroup;
  //pfone
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
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
  }

  //methods
  get s() {
    return this.profileformGroup.controls;
  }
  ProfileForm() {
    this.profileformGroup = new FormGroup({
      Name: new FormControl("", Validators.required),
      Birthday: new FormControl(""),
      Gender: new FormControl("", Validators.required),
      Marital: new FormControl("")
    });
  }
  Profilesub() {
    if (this.profileformGroup.valid) {
      console.log(this.profileformGroup.value.Name)
      this.profileclose.nativeElement.click()
    }
    else {

    }
  }
  logdetails(){
    this.LogindtformGroup = new  FormGroup({
      Email: new FormControl("", Validators.required),
      Phone: new FormControl(undefined, [Validators.required]),
    });
  }
  Loginsub(){
    if (this.LogindtformGroup.valid) {
      console.log(this.LogindtformGroup.value.Phone.internationalNumber)
      this.logindtclose.nativeElement.click()
    }
    else {

    }
  }
}
