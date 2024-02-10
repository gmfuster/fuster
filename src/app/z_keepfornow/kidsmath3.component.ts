import { Component, OnInit } from '@angular/core';

enum ActivityEnum {
  Menu,
  Tables,
  Rounding
}

@Component({
  selector: 'app-kidsmath3',
  templateUrl: './kidsmath3.component.html',
  styleUrls: ['../math-kids/math-kids.component.css']
})


export class KidsMath3Component implements OnInit {
currentActivity:ActivityEnum = ActivityEnum.Menu;
myActivityEnum: typeof ActivityEnum = ActivityEnum;
visibleIs:string ="";

  //constructor(private router:Router) { }
  constructor() { }

  ngOnInit(): void {    
  }

  
  onActivityClick(enumVal:any){
    this.currentActivity = enumVal;    
  }

  setVisibleTo(value:string){
    this.visibleIs = value;
    window.scroll(0,0);
  }

}
