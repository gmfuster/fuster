import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../../shared/commonFuncs.service';

@Component({
  selector: 'plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['../math-kids.component.css'],
  providers:[CommonFuncs]
})

export class PlusMinusComponent implements OnInit, OnDestroy  {
@ViewChild ("myCanvas", {static:true, read:ElementRef}) myCanvas! : ElementRef;  
number1: number = 0;
number2: number = 0;
equationPlus:string ="";
equationMinus:string ="";

  constructor (private renderer: Renderer2, private CommonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  getNumbers(){    
    let ctx = this.myCanvas.nativeElement.getContext("2d");
    ctx.clearRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);

    this.number1 = this.CommonFuncs.getRandom1ToN(12);
    this.number2 = this.CommonFuncs.getRandom1ToN(12);   
    if (this.number2 > this.number1) { 
      [this.number1, this.number2] = [this.number2, this.number1];
    }
    this.equationPlus = `${this.number1}  + ${this.number2} = ${ this.number1 + this.number2}` ;
    this.equationMinus = `${this.number1}  - ${this.number2} = ${ this.number1 - this.number2}` ;
  }

  ngOnInit(){
   window.scroll(0,0);    
   this.getNumbers();
  }    

  showOnCanvas(option:string){
    let ctx = this.myCanvas.nativeElement.getContext("2d");
    ctx.clearRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
    let endOfFirst = 0;
    let multiplier = 10;    
    let secondStartPointSub = 0;
    let normalLineWdth = 15;
    ctx.font = "12px consolas";
    ctx.lineWidth = normalLineWdth;

    if (option === "+"){
      ctx.beginPath();      
      ctx.strokeStyle = "deeppink";
      ctx.moveTo(0, 15);
      endOfFirst = this.number1 * multiplier;
      ctx.lineTo(endOfFirst, 15);  
      ctx.stroke();      
      ctx.fillText(this.number1 , 1, 18);

      setTimeout(() => {
        ctx.beginPath();      
        ctx.strokeStyle = "deepskyblue";
        ctx.moveTo( endOfFirst , 15);
        ctx.lineTo(endOfFirst + (this.number2 * multiplier), 15);  
        ctx.stroke();      
        ctx.fillText(this.number2 , endOfFirst + 1, 18);

        setTimeout(() => {
          ctx.beginPath();      
          ctx.strokeStyle = "green";
          ctx.moveTo( 0 , 40);
          ctx.lineTo(endOfFirst + (this.number2 * multiplier), 40);  
          ctx.stroke();
          ctx.fillText(this.number1 + this.number2, 1,42 );
        }, 1000);
      }, 1000);      
    }else if (option === "-"){

      ctx.beginPath();      
      ctx.strokeStyle = "deeppink";
      ctx.moveTo(0, 15);
      endOfFirst = (this.number1 * multiplier);
      ctx.lineTo(endOfFirst, 15);  
      ctx.stroke();      
      ctx.fillText(this.number1 , 1, 18);

      secondStartPointSub = (this.number1 - this.number2) * multiplier;
      setTimeout(() => {
        ctx.beginPath();            
        ctx.strokeStyle = "deepskyblue";
        ctx.moveTo( secondStartPointSub , 35);      
        ctx.lineTo( this.number1 * multiplier, 35);  
        ctx.stroke();      
        ctx.fillText(this.number2 , secondStartPointSub + 1 , 38);

        ctx.lineWidth = 1;
        ctx.beginPath();    
        ctx.moveTo( secondStartPointSub , 45);
        ctx.lineTo( secondStartPointSub, 5);  
        ctx.stroke(); 
        ctx.beginPath();    
        ctx.moveTo(  this.number1 * multiplier , 45);
        ctx.lineTo(  this.number1 * multiplier, 5);  
        ctx.stroke();     

        ctx.lineWidth = normalLineWdth; 
        setTimeout(() => {
          ctx.beginPath();   
            
          ctx.strokeStyle = "green";
          ctx.moveTo( 0 , 35);      
          ctx.lineTo(secondStartPointSub, 35);  
          ctx.stroke();      
          ctx.fillText(this.number1 - this.number2 ,  1 , 38);
        }, 1000);
      }, 1000);
    }
  }


  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}