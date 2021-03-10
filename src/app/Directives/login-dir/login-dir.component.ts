import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;
   

@Component({
  selector: 'app-login-dir',
  templateUrl: './login-dir.component.html',
  styleUrls: ['./login-dir.component.scss']
})
export class LoginDirComponent implements OnInit {
  formGroup: FormGroup;
  fieldTextType: boolean;
  @ViewChild('closeloginModal') closeloginModal: ElementRef;
  @ViewChild('signup') signupModel :TemplateRef<Object>;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    
     //trigger next modal
     $("#opensignup").on( "click", function() {
      $('#signupModal').modal('show');  
});
  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
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
    return this.formGroup.controls;
  }
  loginProcess() {
    if (this.formGroup.valid) {
      sessionStorage.setItem("email", this.formGroup.value.email);
      this.closeloginModal.nativeElement.click()
    } 
    else {
      
    }
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  opensignup(){
    
    this.closeloginModal.nativeElement.click();
     
    
      
  }

}
