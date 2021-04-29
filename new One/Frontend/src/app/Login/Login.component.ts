import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnChanges, SimpleChanges, Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import {CommonService} from 'src/app/common.service'

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit ,OnChanges{
  @Input() myForm: FormGroup;
  formGroup: FormGroup;
  constructor(private CommonService: CommonService){}
  ngOnInit(){
    this.initForm();
  }
  ngOnChanges(changes: SimpleChanges) {
    const MyFormChanges: SimpleChange = changes.myForm;
    // To Check current values
    console.log(MyFormChanges.currentValue)

    // To Check previous values
    console.log(MyFormChanges.previousValue)

    // To Set Current Values to fields using controls
 this.formGroup.controls['username'].setValue(MyFormChanges.currentValue.email);
}
initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.CommonService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);
        }else{
          alert(result.message);
        }
      })
    }
}
}
