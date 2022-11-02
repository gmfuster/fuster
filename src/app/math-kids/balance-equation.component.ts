import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../shared/commonFuncs.service';

@Component({
  selector: 'balance-equation',
  templateUrl: './balance-equation.component.html',
  styleUrls: ['./math-kids.component.css'],
  providers:[CommonFuncs]
})

export class BalanceEquationComponent implements OnInit, OnDestroy  {
@ViewChild ("balanceEquationSVG", {static:true, read:ElementRef}) mySVG! : ElementRef;
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
maxNumber:number = 20;
  

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
    this.number1eq1 = this.CommonFuncs.getRandom1ToN(this.maxNumber);
    this.number2eq1 = this.CommonFuncs.getRandom1ToN(this.maxNumber);
    this.number1eq2 = this.CommonFuncs.getRandom1ToN(this.maxNumber);
 
    this.totalOfEa1 = this.number1eq1 + this.number2eq1;
    this.number2eq2 = this.totalOfEa1 - this.number1eq2;         

    this.mySVG.nativeElement.style.transform = "rotate(0deg)";
  }

  ngOnInit(){
   window.scroll(0,0);    
   this.getNumbers();
  }  
 
  inputChange(){

  }
  checkResult(){
    
    //check for the old code
    /*if (this.numberEnteredByUser === this.totalOfEa1){
      this.messageForEq1 = this.totalOfEa1.toString();
      this.messageForEq1WithNumFrom2nd = this.messageForEq1 + " - " + this.number1eq2.toString();
      this.number2eq2ForDisplay = this.number2eq2.toString();
    }else{
      this.messageForEq1 = "Try again";
    } */
    let userTotal = this.number1eq2 + this.numberEnteredByUser;      
    if (userTotal === this.totalOfEa1){
      //balanced
      alert("YAY (some other msg coming soon");
      this.mySVG.nativeElement.style.transform = "rotate(0deg)";
    }else if ( userTotal > this.totalOfEa1){
      //res is bigger      
      this.mySVG.nativeElement.style.transform = "rotate(10deg)";
    }else {
      //res is smaller
      this.mySVG.nativeElement.style.transform = "rotate(-10deg)";
    }
  }


  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}