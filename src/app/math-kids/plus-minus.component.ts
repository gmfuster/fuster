import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../shared/commonFuncs.service';

@Component({
  selector: 'plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['./math-kids.component.css'],
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

    this.number1 = this.CommonFuncs.getRandom1ToN(15);
    this.number2 = this.CommonFuncs.getRandom1ToN(15);   
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
    
    ctx.font = "12px consolas";

    if (option === "+"){
      ctx.beginPath();
      ctx.lineWidth = "15";
      ctx.strokeStyle = "deeppink";
      ctx.moveTo(5, 15);
      endOfFirst = 5+(this.number1 * 8);
      ctx.lineTo(endOfFirst, 15);  
      ctx.stroke();      
      ctx.fillText(this.number1 , 6, 18);

      ctx.beginPath();
      ctx.lineWidth = "15";
      ctx.strokeStyle = "deepskyblue";
      ctx.moveTo( endOfFirst , 15);
      ctx.lineTo(endOfFirst + (this.number2 * 8), 15);  
      ctx.stroke();      
      ctx.fillText(this.number2 , endOfFirst + 1, 18);

      ctx.beginPath();
      ctx.lineWidth = "15";
      ctx.strokeStyle = "green";
      ctx.moveTo( 5 , 40);
      ctx.lineTo(endOfFirst + (this.number2 * 8), 40);  
      ctx.stroke();
      ctx.fillText(this.number1 + this.number2, 6,42 );

    }else if (option === "-"){

    }
  }


  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}