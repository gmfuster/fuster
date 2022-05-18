//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'angular-notes-forms',
  templateUrl: './angular-notes-forms.component.html',
  styleUrls: ['./angular-notes.component.css']
})

export class AngularNotesFormsComponent implements OnInit {
@ViewChild('f3') myForm : NgForm | undefined;
@ViewChild('f4') myFormSecond : NgForm | undefined;
  ngOnInit(){
    window.scroll(0,0);
  }
  
  onSubmit(form:any){
    alert(form);
  }
  onSubmitNA(){
    alert(this.myForm);
    //console.log(this.myFormSecond);
  }
}
