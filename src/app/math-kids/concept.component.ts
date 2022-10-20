import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../shared/commonFuncs.service';

@Component({
  selector: 'concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./math-kids.component.css'],
  providers: [CommonFuncs]
})

export class ConceptComponent implements OnInit, OnDestroy  {
@ViewChild("boxForCircles", {static:false, read:ElementRef}) myBoxForCircles! : ElementRef ;
random1:number = 0;
random2:number = 0;
total: number = this.random1 + this.random2;

  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);    
     
  }  
  
  setRandomNums(){
    this.random1 = this.commonFuncs.getRandom1ToN(10);
    this.random2 = this.commonFuncs.getRandom1ToN(10);
    this.total = this.random1 + this.random2;

    this.showTheCircles();
  }

  showTheCircles(){
    //blue circles (first num)
    for(var i=1; i<= this.random1; i++){
      var c = document.createElement("div");
      c.style.border = "deepskyblue solid 2px";
      c.style.borderRadius = "50%";
      c.style.position = "absolute";
      c.style.left = "1%";
      c.style.top = "1%";
      c.style.width = "4vw";
      c.style.height = "4vw";      
      this.renderer.addClass(c, 'blueCircle1');        
      this.myBoxForCircles.nativeElement.appendChild(c);   
    }
    //pink circles
    for(var i=1; i<= this.random2; i++){
      var c = document.createElement("div");
      c.style.border = "deeppink solid 2px";
      c.style.borderRadius = "50%";
      c.style.position = "absolute";
      c.style.left = "1%";
      c.style.top = "1%";
      c.style.width = "4vw";
      c.style.height = "4vw";

      c.animate( [{ top: "5%" }, { top:"25%"}, {top:"50%"}, {top:"75%"}, {top :"80%"} ]  ,      
      {  delay:500,  duration: 2000, fill: "forwards"})

      this.myBoxForCircles.nativeElement.appendChild(c);         
    }
    console.log(this.myBoxForCircles.nativeElement)
    
  }
  
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}