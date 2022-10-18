import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./math-kids.component.css']
})

export class CountByComponent implements OnInit, OnDestroy  {
countingBy :number = 0;
ctx:any = null;
@ViewChild("countByCanvas", {static : true}) myCountByCanvas! : ElementRef;

  constructor (private renderer: Renderer2){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');  
  }

  ngOnInit(){
    window.scroll(0,0);         
    var c = this.myCountByCanvas.nativeElement;    
    if (c !== null){
      this.ctx = c.getContext("2d");      
    }
  }
  
  countBy(num:number){
    this.countingBy = num;    
  }
      
  checkResult(){
    if (this.ctx  !== null && this.ctx !== undefined){
      //switch
    }
  }

 
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}
