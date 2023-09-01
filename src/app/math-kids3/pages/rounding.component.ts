import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
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
  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);       
  }  
  onGetNumberClicked(){
    this.numberToRound = this.commonFuncs.getRandom1ToN(999);
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