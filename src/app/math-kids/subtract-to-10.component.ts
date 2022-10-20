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
  calculate(){
    //get last digit of from number
    var fromNumString = this.subtractFromNum.toString();
    var lastDigit = fromNumString.substr(fromNumString.length - 1);
    this.secondDigitFromNumber = parseInt(lastDigit);
    var firstDigit = fromNumString.substr(0,1);
    this.firstDigitFromNumber = parseInt(firstDigit);
    this.subtractNumMinusSecondDigit = this.subtractNum - parseInt(lastDigit);
    this.subtractionRes = this.subtractFromNum - this.subtractNum;
    
    this.renderer.addClass(this.mySolution.nativeElement, 'visible');  
    this.renderer.removeClass(this.mySolution.nativeElement, 'invisible');       
  }

  isChangedAllowed(subtractFromNum:number, subtractNum:number){
    //if the second digit of subtractFromNumber is bigger than the subtractFrom number, don't do it.
    //not used yet
    return true;
    var lastDigit = subtractFromNum.toString().substr(subtractFromNum.toString().length - 1); 
    var lastDigitNum = parseInt(lastDigit);
    if (lastDigitNum > subtractNum){
      return false;
    }
    return true;
  }

  //todo the prevent default is not working right, doesn't matter now because it's always OK
  //also, not doing the calcs unless the button is clicked.
  numbersChanged(event:Event, fromWhere:string){  
    this.renderer.addClass(this.mySolution.nativeElement, 'invisible'); 
    this.renderer.removeClass(this.mySolution.nativeElement, 'visible');   
    /*
    let subtractFromNum, subtractNum;
    if (fromWhere === "subtractFromNum"){
      subtractFromNum = parseInt((event.target as HTMLInputElement).value);
      subtractNum = this.subtractNum;      
    }else{
      subtractNum = parseInt((event.target as HTMLInputElement).value);
      subtractFromNum = this.subtractFromNum;
    }    
    if (!this.isChangedAllowed(subtractFromNum,subtractNum)) {
      event.preventDefault();
    }
    else{
      this.calculate();    
    }
    */
  }
  //todo the prevent default is not working right, doesn't matter now because it's always OK
  //also, not doing the calcs unless the button is clicked.
  numbersChangedk(event:KeyboardEvent, fromWhere:string){
    this.renderer.addClass(this.mySolution.nativeElement, 'invisible'); 
    this.renderer.removeClass(this.mySolution.nativeElement, 'visible');   
    /*
    let subtractFromNum, subtractNum;
    if (fromWhere === "subtractFromNum"){
      subtractFromNum = parseInt((event.target as HTMLInputElement).value);
      subtractNum = this.subtractNum;      
    }else{
      subtractNum = parseInt((event.target as HTMLInputElement).value);
      subtractFromNum = this.subtractFromNum;
    }
    if (event.key === "." || !this.isChangedAllowed(subtractFromNum,subtractNum )){
      event.preventDefault();
    }else{
      this.calculate();
    }    
    */
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}