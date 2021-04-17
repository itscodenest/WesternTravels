import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare  var jQuery:  any;
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-customprferencecard',
  templateUrl: './customprferencecard.component.html',
  styleUrls: ['./customprferencecard.component.scss']
})
export class CustomprferencecardComponent implements OnInit {
  step1=true;step2=false
  //phone country code custumisation starts
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  constructor() { }
 
  ngOnInit(): void {
   
  }
  next(){
   this.step1=false;
   this.step2 = true;
  }

  prev(){
    this.step2=false;
   this.step1 = true;
  }
}
