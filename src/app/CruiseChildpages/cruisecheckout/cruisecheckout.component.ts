import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cruisecheckout',
  templateUrl: './cruisecheckout.component.html',
  styleUrls: ['./cruisecheckout.component.scss']
})
export class CruisecheckoutComponent implements OnInit {
  public id: string; TravellerformGroup: FormGroup;submitted = false;
  constructor(private activatedRoute: ActivatedRoute,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.TravellerformGroup = this.fb.group({
      numberOfTickets: ['', Validators.required],
      Countrycode:['',Validators.required],
      Phoneno: ['',[Validators.required]],
      Email: ['',[Validators.required,Validators.email]],
      GSTIN: [''],
      GSTName: [''],
      travellerdetail: new FormArray([])
  })
  }

  get f() {
    return this.TravellerformGroup.controls;
  }
  get t() { return this.f.travellerdetail as FormArray; }

  onChangeTickets(e) {
    const numberOfTickets = e.target.value || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.fb.group({
          Gender: ['Mr', Validators.required],
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
}

