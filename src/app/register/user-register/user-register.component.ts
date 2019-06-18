import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.sass']
})
export class UserRegisterComponent implements OnInit {

  profileForm: FormGroup;
  firstName= new FormControl("", Validators.required);
  lastName= new FormControl("", Validators.required);
  jobType= new FormControl({value: '', disabled: true} , Validators.required);

  constructor(fb: FormBuilder) {
    this.profileForm = fb.group({
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "jobType" : this.jobType
    });
       
  }
  
  ngOnInit() {
    this.onChanges(); 
  }

  onChanges() {
    this.profileForm.get("firstName").valueChanges.subscribe((value: string) =>{
      
      if(value.toUpperCase() == "RAM"){
        this.profileForm.get("jobType").setValue("Gvnt");
      }else if(value.toUpperCase().trim() == ""){
        this.profileForm.get("jobType").setValue("Self");
      } else {
        this.profileForm.get("jobType").setValue("Pvt");
      }
      console.log(JSON.stringify(value));
      // this.profileForm.setValue(value);
      // return value;
    });
  }

  doSubmit(){
    console.log(this.profileForm.value);
    // alert("inside doSubmit method");
  }
}
