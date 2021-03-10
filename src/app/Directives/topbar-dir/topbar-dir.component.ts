import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'topbar-dir',
  templateUrl: './topbar-dir.component.html',
  styleUrls: ['./topbar-dir.component.scss']
})
export class TopbarDirComponent implements OnInit {
  LoginformGroup: FormGroup;SignupformGroup:FormGroup;
  fieldTextType: boolean;
  @ViewChild('closeloginModal') closeloginModal: ElementRef;
  @ViewChild('mySidenav') sidenav: ElementRef;
  constructor() { }

  ngOnInit(): void {
    //login
    this.initForm();
    //signup
    this.signupForm();
    

  }

  //////////////////////////////////////////////////methods//////////////////////////////////////////////////
  initForm() {
    this.LoginformGroup = new FormGroup({
      email: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
        )
      ])
    });
  }
  signupForm(){
    this.SignupformGroup = new FormGroup({
      email: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
        )
      ])
    });
  }
  get f() {
    return this.LoginformGroup.controls;
  }
  get s() {
    return this.SignupformGroup.controls;
  }
  loginProcess() {
    if (this.LoginformGroup.valid) {
      sessionStorage.setItem("email", this.LoginformGroup.value.email);
      this.closeloginModal.nativeElement.click()
    }
    else {

    }
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  openNav() {
     this.sidenav.nativeElement.style.width= "250px";
    
  }
  
  closeNav() {
    this.sidenav.nativeElement.style.width= "0";
  }

}
