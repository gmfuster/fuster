import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../../shared/commonFuncs.service';

@Component({
  selector: 'sub-count-up',
  templateUrl: './sub-count-up.component.html',
  styleUrls: ['../math-kids.component.css'],
  providers:[CommonFuncs]
})

export class SubCountUpComponent implements OnInit, OnDestroy  {
 number1:number = 0;
 number2:number =0;
 result:number = 0;
 //isResultVisible:boolean = false;
 isResultVisible:string = "hidden";
 backColor1:string[] = [];
 backColor2:string[] = [];
  

  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);       
  }  
  
  getSubtraction(){
    //arrays will have one more element than needed just to make it easier on the html side    
    this.isResultVisible ="hidden";
    this.number1 = this.commonFuncs.getRandom1ToN(15);//not coded for this to be changed to whatever
    this.number2 = this.commonFuncs.getRandom1ToN(15);
    if(this.number2 > this.number1){
      [this.number1, this.number2] = [this.number2, this.number1];
    }
    this.result = this.number1 - this.number2;
    for (let i=0; i<=this.number1; i++){
      this.backColor1[i] = "lightblue";
    }    
    for (let i=(this.number1+1); i<=15; i++){      
      this.backColor1[i] = "transparent";
    }    
    for (let i=0; i<=this.number2; i++){
      this.backColor2[i] = "lightblue";
    }    
    for (let i=(this.number2+1); i<=15; i++){      
      this.backColor2[i] = "transparent";
    }    
  }
  showResult(){
    this.isResultVisible = "visible";
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}