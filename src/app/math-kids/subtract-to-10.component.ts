import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'subtract-to-10',
  templateUrl: './subtract-to-10.component.html',
  styleUrls: ['./math-kids.component.css']
})

export class SubtractTo10Component implements OnInit, OnDestroy  {
  @ViewChild("solution", {static:true} ) mySolution!: ElementRef;
  subtractFromNum:number = 11;
  subtractNum:number = 1;
  firstDigitFromNumber:number=1;
  secondDigitFromNumber:number=1;
  subtractionRes:number = 10;
  subtractNumMinusSecondDigit:number = 0;
  

  constructor (private renderer: Renderer2){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);    
   
  }  
  onShowHow(){

  }
  numbersChanged(event:Event){
    console.log(this.subtractFromNum);  
    //var charCode = (event.which) ? event.which : event.keyCode;
  }
  numbersChangedk(event:KeyboardEvent){
    if (event.key === "."){
      event.preventDefault();
    }
    
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}