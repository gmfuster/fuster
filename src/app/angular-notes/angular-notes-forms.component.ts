//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'angular-notes-forms',
  templateUrl: './angular-notes-forms.component.html',
  styleUrls: ['./angular-notes.component.css']
})

export class AngularNotesFormsComponent implements OnInit {
  
  ngOnInit(){
    window.scroll(0,0);
  }
  
  onSubmit(form:any){
    alert(form);
  }
}
