import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

enum ActivityEnum {
  Concept,
  Arrays,
  AddSplitting,
  Carry1,  
  NumberChart,
  CountBy,
  SubtractTo10,
  SubtractWithTallies,
  SubtractCountUp,
  BalanceEquation,
  PlusMinus,
  Menu,
  Clock
}

@Component({
  selector: 'app-kidsmath',
  templateUrl: './kidsmath.component.html',
  styleUrls: ['./math-kids.component.css']
})


export class KidsMathComponent implements OnInit {
//currentActivity:ActivityEnum = ActivityEnum.Menu;
//myActivityEnum: typeof ActivityEnum = ActivityEnum;
visibleIs:string ="";

  //constructor(private router:Router) { }
  constructor() { }

  ngOnInit(): void {    
  }

  /*
  onActivityClick(enumVal:any){
    this.currentActivity = enumVal;    
  }

 */

  setVisibleTo(value:string){
    this.visibleIs = value;
    window.scroll(0,0);
  }

}
