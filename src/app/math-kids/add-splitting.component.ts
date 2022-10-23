import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../shared/commonFuncs.service';

@Component({
  selector: 'add-splitting',
  templateUrl: './add-splitting.component.html',
  styleUrls: ['./math-kids.component.css'],
  providers:[CommonFuncs]
})

export class AddSplittingComponent implements OnInit, OnDestroy  {
 number1:number = 0;
 number2:number =0;
 splitUptheNumber:string = "?";
  

  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);       
  }  
  
  getAnAddition(){
    this.number1 = this.commonFuncs.getRandom1ToN(50);
    this.number2 = this.commonFuncs.getRandom1ToN(50);
    this.splitUptheNumber = "?";
  }

  seeTheResult(){
    var numberOfTens = Math.floor(this.number2 /10);
    var numberOfOnes = this.number2%10;
    this.splitUptheNumber = this.number1.toString() + " ";
    if (numberOfTens > 0 ){      
      for (let i = 1; i<= numberOfTens; i++ ){
        this.splitUptheNumber += " + 10";
      }
    }
    if (numberOfOnes > 0 ){      
      for (let i = 1; i<= numberOfOnes; i++ ){
        this.splitUptheNumber += " + 1";
      }
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}