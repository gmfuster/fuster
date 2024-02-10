import { Component,  OnInit, OnDestroy, Renderer2 , ElementRef, ViewChild} from '@angular/core';
import { CommonFuncs } from '../../shared/commonFuncs.service';

@Component({
  selector: 'TwoStepProblem',
  templateUrl: './2StepProblem.component.html',
  styleUrls: ['../../math-kids/math-kids.component.css'],
  providers:[CommonFuncs]
})

export class TwoStepProblemComponent implements OnInit, OnDestroy  {
  
  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);  
  
  }  

  

  reset(){
  
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}