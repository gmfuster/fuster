import { Component,  OnInit, OnDestroy, Renderer2 , ElementRef, ViewChild} from '@angular/core';
import { CommonFuncs } from '../../shared/commonFuncs.service';

@Component({
  selector: 'rounding',
  templateUrl: './rounding.component.html',
  styleUrls: ['../../math-kids/math-kids.component.css'],
  providers:[CommonFuncs]
})

export class RoundingComponent implements OnInit, OnDestroy  {
  roundingBy :number = 10;
  numberToRound: number = 0;
  numberToRoundAsChars: number[] = [];
  topNumber:number=0;
  bottomNumber:number= 0;
  @ViewChild ("myCanvas", {static:true, read:ElementRef}) myCanvas! : ElementRef;    
  
  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);  
    this.showCanvas();    
  }  

  showCanvas(){
    let ctx = this.myCanvas.nativeElement.getContext("2d");
    ctx.clearRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);       
    ctx.font = "12px consolas";
    ctx.lineWidth = 4;  
    ctx.beginPath();      
    ctx.strokeStyle = "deeppink";
    ctx.moveTo(this.myCanvas.nativeElement.width/2, 8);    
    ctx.lineTo(this.myCanvas.nativeElement.width/2, this.myCanvas.nativeElement.height - 10);  
    ctx.stroke();       
    ctx.beginPath();    
    ctx.strokeStyle = "deepskyblue";
    ctx.lineWidth = 2;  
    ctx.moveTo(20, this.myCanvas.nativeElement.height/2 -8 );  
    ctx.lineTo(this.myCanvas.nativeElement.width - 10,this.myCanvas.nativeElement.height/2 - 8);    
    ctx.stroke();         
  }

  onGetNumberClicked(){
    this.numberToRound = this.commonFuncs.getRandom1ToN(1999);
    this.numberToRoundAsChars = [];
    this.numberToRoundAsChars = this.numberToRound.toString(10).replace(/\D/g, '0').split('').map(Number);
    this.showCanvas();
    this.showTheNumbers();
  }

  showTheNumbers(){
    let auxNum = 0;

    if (this.roundingBy === 10){
      if (this.numberToRoundAsChars.length == 1){
        this.topNumber = 10;
        this.bottomNumber = 0;
      }else if (this.numberToRoundAsChars.length > 1){
        auxNum = this.numberToRoundAsChars[this.numberToRoundAsChars.length-2];        
        if (this.numberToRoundAsChars.length  === 2){
          this.topNumber = (auxNum+1)*10;
          this.bottomNumber = auxNum *10;
        }else if (this.numberToRoundAsChars.length ===3){
          this.topNumber = (auxNum+1)*10 + this.numberToRoundAsChars[this.numberToRoundAsChars.length-3] * 100;
          this.bottomNumber = auxNum *10 + this.numberToRoundAsChars[this.numberToRoundAsChars.length-3] * 100;
        }  else if (this.numberToRoundAsChars.length === 4)  {
          this.topNumber = (auxNum+1)*10 + this.numberToRoundAsChars[this.numberToRoundAsChars.length-4] * 1000 + this.numberToRoundAsChars[this.numberToRoundAsChars.length-3] * 100;
          this.bottomNumber = auxNum *10 + this.numberToRoundAsChars[this.numberToRoundAsChars.length-4] * 1000 +this.numberToRoundAsChars[this.numberToRoundAsChars.length-3] * 100;
        }
      }
    }else if (this.roundingBy === 100){
      if (this.numberToRoundAsChars.length <= 2){
        this.topNumber = 100;
        this.bottomNumber = 0;
      }else if (this.numberToRoundAsChars.length > 2){
        auxNum = this.numberToRoundAsChars[this.numberToRoundAsChars.length-3];    
        if (this.numberToRoundAsChars.length  === 3){
          this.topNumber = (auxNum+1)*100;
          this.bottomNumber = auxNum *100;
        }else if (this.numberToRoundAsChars.length === 4){
          this.topNumber = (auxNum+1)*100 + this.numberToRoundAsChars[this.numberToRoundAsChars.length-4] * 1000;
          this.bottomNumber = auxNum *100 + this.numberToRoundAsChars[this.numberToRoundAsChars.length-4] * 1000;
        }                                
      }
    }else if (this.roundingBy === 1000){
      if (this.numberToRoundAsChars.length <= 3){
        this.topNumber = 1000;
        this.bottomNumber = 0;
      }else if (this.numberToRoundAsChars.length === 4){
        auxNum = this.numberToRoundAsChars[this.numberToRoundAsChars.length-4];        
        this.topNumber = (auxNum+1)*1000;
        this.bottomNumber = auxNum *1000;                
      }
    }

    let ctx = this.myCanvas.nativeElement.getContext("2d");
    ctx.font = "12px consolas";    
    ctx.fillStyle = "deeppink"; 
    ctx.fillText(this.topNumber, this.myCanvas.nativeElement.width/2 + 10 , 10); 
    ctx.fillStyle = "deepskyblue"; 
    ctx.fillText(this.bottomNumber, this.myCanvas.nativeElement.width/2 + 10 , this.myCanvas.nativeElement.height - 10);     

  }

  roundBy(num:number){
    this.reset();
    this.roundingBy = num;    
  }

  reset(){
  
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}