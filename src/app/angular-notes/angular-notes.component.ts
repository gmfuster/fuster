import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-notes',
  templateUrl: './angular-notes.component.html',
  styleUrls: ['./angular-notes.component.css']
})

export class AngularNotesComponent implements OnInit {
  theVariable :string =  "" ;
  theBoolVar: boolean = true;

  ngOnInit(){
    window.scroll(0,0);
  }
  onClickButton1(s: string) {
    this.theVariable = s + "-" + "changed";
  }

  onSwitchTheBoolVar() {    
    this.theBoolVar = !this.theBoolVar;    
  }

  onSetVariableToHello() {
    this.theVariable = "hello";
  }
}
