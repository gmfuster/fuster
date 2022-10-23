import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../shared/commonFuncs.service';

@Component({
  selector: 'balance-equation',
  templateUrl: './balance-equation.component.html',
  styleUrls: ['./math-kids.component.css'],
  providers:[CommonFuncs]
})

export class BalanceEquationComponent implements OnInit, OnDestroy  {
number1eq1: number=0; 
number2eq1: number=0; 
number1eq2: number=0; 
number2eq2: number=0; 
totalOfEa1:number = 0;
number2eq2ForDisplay:string = "?";
signEq2:string ="+";
messageForEq1 = "the total is"
messageForEq1WithNumFrom2nd = "??";
numberEnteredByUser = 0;

inputResEq1:number = 0;
  

  constructor (private renderer: Renderer2, private CommonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  getNumbers(){

    this.number2eq2ForDisplay = "?";
    this.numberEnteredByUser = 0;
    this.totalOfEa1 = 0;
    this.messageForEq1WithNumFrom2nd = "??";
    this.messageForEq1 = "the total is";
    this.number1eq1 = this.CommonFuncs.getRandom1ToN(10);
    this.number2eq1 = this.CommonFuncs.getRandom1ToN(10);
    this.number1eq2 = this.CommonFuncs.getRandom1ToN(10);
 
    this.totalOfEa1 = this.number1eq1 + this.number2eq1;
    this.number2eq2 = this.totalOfEa1 - this.number1eq2;
   //(this.number2eq2 >= 0 )? this.signEq2 = " + ": this.signEq2 = " - ";
   
   
  }

  ngOnInit(){
   window.scroll(0,0);    
   this.getNumbers();
  }  
 
  checkResult(){
     
    if (this.numberEnteredByUser === this.totalOfEa1){
      this.messageForEq1 = this.totalOfEa1.toString();
      this.messageForEq1WithNumFrom2nd = this.messageForEq1 + " - " + this.number1eq2.toString();
      this.number2eq2ForDisplay = this.number2eq2.toString();
    }else{
      this.messageForEq1 = "Try again";
    } 
  }


  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}