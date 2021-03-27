import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  TravellerformGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.TravellerformGroup = new FormGroup({
      Gender: new FormControl("", [Validators.required]),
      Firstname: new FormControl("", [Validators.required]),
      Lastname: new FormControl("", [ Validators.required]),
      DOB: new FormControl("", [ Validators.required]),
      Passport: new FormControl("")
  })
}
  get f() {
    return this.TravellerformGroup.controls;
  }
  Travelersdetails(){

  }
  }


