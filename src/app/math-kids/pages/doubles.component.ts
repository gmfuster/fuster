import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doubles',
  templateUrl: './doubles.component.html',
  styleUrls: ['../math-kids.component.css']
})

export class DoublesComponent implements OnInit {
  digit1:number = 0;
  digit2:number = 0;  
  digit1digit2:number = 0;
  constructor (){
        
  }
  ngOnInit(){
    window.scroll(0,0);
  }

  doubleClicked(x:number,y:number){
    this.digit1 = x;
    this.digit2 = y;
    this.digit1digit2 = this.digit1+this.digit2;
  }
}
