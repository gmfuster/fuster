//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'angular-notes-forms',
  templateUrl: './angular-notes-forms.component.html',
  styleUrls: ['./angular-notes.component.css']
})

export class AngularNotesFormsComponent implements OnInit {
@ViewChild('f3') myForm : NgForm | undefined;
@ViewChild('f4') myFormSecond : NgForm | undefined;
@ViewChild('f6') myFormSix : NgForm | undefined;
@ViewChild('InputButtonGroup') myFormGroup : NgForm | undefined;
optionR : string = "1";
myReactiveForm: FormGroup ; //do not just assign something here, do it in the ngOnInit.

  constructor(){
    this.myReactiveForm = new FormGroup({});//just add this here to avoid the compiler error, and do it for real in the ngOnInit
  }

  ngOnInit(){
    window.scroll(0,0);
    this.myReactiveForm = new FormGroup({
      "number1" : new FormControl(),
      "number2" : new FormControl(),
      "radioButton" : new FormControl('2')
    });
  }
  
  onSubmit(form:any){
    alert(form);
  }
  onSubmitNA(){
    alert(this.myForm);
    //console.log(this.myFormSecond);
  }
  onSubmit6(){    
    console.log(this.myFormSix);
  }
  onSubmitGroup(){    
    console.log(this.myFormGroup);
  }
}
