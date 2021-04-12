import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export class checkoutdetails {
  Countrycode: number;
  Phoneno: number;
  Email: string;
  GSTIN: string;
  GSTName: string;
  travellers: travellerdetails[]
}
export class travellerdetails {
  Gender: string;
  Firstname: string;
  Lastname: string;
  DOB: string;
  Passport: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  TravellerformGroup: FormGroup; submitted = false;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.TravellerformGroup = this.fb.group({
      numberOfTickets: ['', Validators.required],
      Countrycode: ['', Validators.required],
      Phoneno: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      GSTIN: [''],
      GSTName: [''],
      travellerdetail: new FormArray([])
    })
  }
  get f() {
    return this.TravellerformGroup.controls;
  }
  get t() { return this.f.travellerdetail as FormArray; }

  // trvlr(){
  //   return this.TravellerformGroup.controls["travellerdetail"] as FormArray;
  // }

  // newtravveler(): FormGroup{
  //   return this.fb.group({

  //   })
  // }

  onChangeTickets(e) {
    const numberOfTickets = e.target.value || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.fb.group({
          Gender: ['', Validators.required],
          Firstname: ['', Validators.required],
          Lastname: ['', Validators.required],
          DOB: ['', Validators.required],
          Passport: ['', Validators.required],
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }
  }

  Travelersdetails() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.TravellerformGroup.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.TravellerformGroup.value, null, 4));
  }
  Paymentpage() {
    this.router.navigateByUrl("Destination/Payment")
  }
}


