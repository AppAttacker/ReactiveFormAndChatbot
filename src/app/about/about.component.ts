import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  empForm: FormGroup;
  activePage: number = 1;
  street = new FormControl("",Validators.required);
  email = new FormControl("",Validators.required);
  pincode = new FormControl("");
  newStreet: string;
  newEmail: string;
  newPincode: string;
  // address = new FormGroup({"street" : this.street,"email" : this.email,"pincode" : this.pincode});
  
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.empForm = this._fb.group({
      name: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['',[Validators.email]],
      addresses: this.initAddress(),
      proofs: this.initProof()
    })
  }

  initAddress(){
    return this._fb.array([this._fb.group({
      street: ['street1', Validators.required],
      email: ['test.mail@gmail.com', Validators.email],
      pincode: ['12345']
    }),this._fb.group({
      street: ['street2', Validators.required],
      email: ['test1.mail@gmail.com', Validators.email],
      pincode: ['98765']
    }),this._fb.group({
      street: ['street3', Validators.required],
      email: ['test2.mail@gmail.com', Validators.email],
      pincode: ['456877']
    })]);
  }

  initProof(){
    return this._fb.array([this._fb.group({
      proofName: ['VoterId'],
      idNumber: ['Voter112233']
    }),this._fb.group({
      proofName: ['Driving License'],
      idNumber: ['Lic12345']
    })]);
  }
  
  saveForm(){
    console.log(JSON.stringify(this.empForm.value));
  }

  removeRow(i: number, type: string){
    if(type=="address"){
      alert(JSON.stringify(this.empForm.get('addresses').value[i])+" address removed");
      // this.empForm.get('addresses').removeAt(i);
      const control = this.empForm.controls['addresses'] as FormArray;
      console.log(control.controls);
      control.removeAt(i);
    }else{
      alert(JSON.stringify(this.empForm.get('proofs').value[i])+" proof removed");
      // this.empForm.get('addresses').removeAt(i);
      const control = this.empForm.controls['proofs'] as FormArray;
      console.log(control.controls);
      control.removeAt(i);
    }
  }
  removeProof(i: number){
    alert(JSON.stringify(this.empForm.get('proofs').value[i])+" proof removed");
    const control = this.empForm.controls['proofs'] as FormArray;
    console.log(control.controls);
    control.removeAt(i);
  }

  addRow(type: string){
    this.empForm.markAsDirty();
    if(type=='address'){
      var street  = new FormControl("",Validators.required);
      var email = new FormControl("",Validators.email);
      var pincode = new FormControl("");
      var address = new FormGroup({"street" : street,"email" : email,"pincode" : pincode});
      const control = this.empForm.controls['addresses'] as FormArray;
      control.controls.push(address);
    }else{
      var proofName = new FormControl("");
      var idNumber = new FormControl("");
      var proof = new FormGroup({"proofName" : proofName,"idNumber" : idNumber});
      const control = this.empForm.controls['proofs'] as FormArray;
      control.controls.push(proof);
    }
  }

  updateRow(i: number, type: string){
    if(type=="address"){
      const controlAddress = this.empForm.controls['addresses'] as FormArray;
      console.log(controlAddress.controls);
      alert(JSON.stringify(controlAddress.controls[i].value)+" address added");
    }else{
      const controlProof = this.empForm.controls['proofs'] as FormArray;
      console.log(controlProof.controls);
      alert(JSON.stringify(controlProof.controls[i].value)+" proof added");
    }
  }

  setActivePage(pageNumber: number){
    this.activePage = this.activePage + pageNumber;
  }

  resetValues(){
    if(this.activePage==2){
      this.empForm.controls['addresses'] = this.initAddress();
    }else if(this.activePage==3){
      this.empForm.controls['proofs'] = this.initProof();
    }else{
      this.empForm.controls['name'].setValue("");
      this.empForm.controls['email'].setValue("");
    }
    console.log(this.empForm);
  }
  resetAllValues(){
    this.initForm();
    
  }

}
