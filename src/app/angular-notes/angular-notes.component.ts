import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-notes',
  templateUrl: './angular-notes.component.html',
  styleUrls: ['./angular-notes.component.css']
})

export class AngularNotesComponent implements OnInit {
  theVariable :string =  "" ;
  theBoolVar: boolean = true;
  theColor: string = "aqua";

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

  onRandomColor(){   
    //todo random function to use in common
    //between 2 numbers Math.floor(Math.random() * (max - min + 1)) + min;
    // Between 0 and max Math.floor(Math.random() * (max + 1));
    // Between 1 and max Math.floor(Math.random() * max) + 1;     

    switch(Math.floor(Math.random() * 6) + 1){
      case 1: this.theColor= "aqua";
              break;
      case 2: this.theColor="red";
              break;
      case 3: this.theColor="pink";
              break;
      case 4: this.theColor="yellow";
              break;
      case 5: this.theColor="green";
              break;
      case 6: this.theColor="gray";
              break;
      default: this.theColor = "aqua";
              break;

    }
      
  }
}
