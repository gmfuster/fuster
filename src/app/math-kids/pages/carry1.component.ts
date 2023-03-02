import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../../shared/commonFuncs.service';

@Component({
  selector: 'carry1',
  templateUrl: './carry1.component.html',
  styleUrls: ['../math-kids.component.css'],
  providers:[CommonFuncs]
})

export class Carry1Component implements OnInit, OnDestroy  {
carry1string :string = "";
firstNumberFirstDigitString: string = "";
firstNumberSecondDigitString:string = "";
secondNumberFirstDigitString: string = "";
secondNumberSecondDigitString:string = "";
resultNumberFirstDigitString:string = "";
resultNumberSecondDigitString:string = "";
resultNumber0DigitDigitString:string = "";
firstNumber:number = 0;
secondNumber:number=0;
  

  constructor (private renderer: Renderer2, private CommonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);       
   }  

  getNumbers(){
    this.firstNumber = this.CommonFuncs.getRandom1ToN(20);
    this.secondNumber = this.CommonFuncs.getRandom1ToN(20);
    
    if (this.firstNumber < 10){
      this.firstNumberFirstDigitString = "";
      this.firstNumberSecondDigitString = this.firstNumber.toString();
    }else {
      this.firstNumberFirstDigitString = this.firstNumber.toString().substr(0,1);
      this.firstNumberSecondDigitString = this.firstNumber.toString().substr(1,1);
    }
    if (this.secondNumber < 10){
      this.secondNumberFirstDigitString = "";
      this.secondNumberSecondDigitString = this.secondNumber.toString();
    }else {
      this.secondNumberFirstDigitString = this.secondNumber.toString().substr(0,1);
      this.secondNumberSecondDigitString = this.secondNumber.toString().substr(1,1);
    }
    this.resultNumberFirstDigitString = "";
    this.resultNumberSecondDigitString = "";
    this.carry1string = "";
  }

  checkResult(){
    
    if ( parseInt(this.firstNumberSecondDigitString) + parseInt(this.secondNumberSecondDigitString) >= 10){
      this.carry1string = "1";
    }
    let total = this.firstNumber + this.secondNumber;

    if (total < 10){
      this.resultNumberSecondDigitString = total.toString();
    }else {
      this.resultNumberFirstDigitString = total.toString().substr(0,1);
      this.resultNumberSecondDigitString = total.toString().substr(1,1);
      if (total >= 100){
        this.resultNumber0DigitDigitString = total.toString().substr(2,1);
      }
    }
   
  }


  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}