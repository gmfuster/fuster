import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../../shared/commonFuncs.service';

@Component({
  selector: 'concept',
  templateUrl: './concept.component.html',
  styleUrls: ['../math-kids.component.css'],
  providers: [CommonFuncs]
})

export class ConceptComponent implements OnInit, OnDestroy  {
@ViewChild("boxForCircles", {static:false, read:ElementRef}) myBoxForCircles! : ElementRef ;
random1:number = 0;
random2:number = 0;
total: number = this.random1 + this.random2;
maxNumber:number = 10; //this is going to matter for the animation

  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);    
     
  }  
  
  setRandomNums(){
    this.random1 = this.commonFuncs.getRandom1ToN(this.maxNumber);
    this.random2 = this.commonFuncs.getRandom1ToN(this.maxNumber);
    this.total = this.random1 + this.random2;

    this.showTheCircles();
  }

  createElementAndReturnItBluePink(iteration:number, color:string){
    let thediv = document.createElement("div") as HTMLDivElement;
    thediv = document.createElement("div") as HTMLDivElement;

    let endLeftposition  = (iteration * 8).toString()+"%";
    let startLeftPosition = (iteration * 2).toString()+"%";
    let secondLeftPosition = (iteration * 4).toString()+"%";
    let thirdLeftPosition = (iteration * 6).toString()+"%";
    if (color === "B"){
      thediv.style.border = "deepskyblue solid 5px";
      setTimeout(() => {              
        thediv.animate( [{ top: "1%", left:startLeftPosition }, { top:"25%", left:secondLeftPosition }, {top:"40%", left:thirdLeftPosition}, {top:"50%"}, {top :"50%"} ,  
        {top :"50%", left:endLeftposition }]  ,      
          {  delay: 200,  duration: 2000, fill: "forwards"})
        }, 500);   
    }      
    else if (color === "P"){
      thediv.style.border = "deeppink solid 5px";
      setTimeout(() => {              
        thediv.animate( [{ top: "1%", left:startLeftPosition  }, { top:"25%", left:secondLeftPosition}, {top:"50%", left:thirdLeftPosition}, {top:"75%"}, {top :"75%"}  , 
        {top :"75%", left:endLeftposition}]  ,      
          {  delay: 200,  duration: 2000, fill: "forwards"})
        }, 500);   
    }

    thediv.style.borderRadius = "50%";
    thediv.style.position = "absolute";     
    thediv.style.width = "4vw";
    thediv.style.height = "4vw";   
    thediv.style.backgroundColor = "lightyellow";      
    thediv.style.color = "navy";
    thediv.innerHTML = iteration.toString();   
    return thediv;
  }
  showTheCircles(){    
    //remove existing ones
    while (this.myBoxForCircles.nativeElement.firstChild) {
      this.myBoxForCircles.nativeElement.removeChild(this.myBoxForCircles.nativeElement.firstChild);
    } 
    //blue circles (first num)
    for(var i=1; i<= this.random1; i++){      
      this.myBoxForCircles.nativeElement.appendChild(this.createElementAndReturnItBluePink(i, "B"));   
    }
    //pink circles
    for(var i=1; i<= this.random2; i++){
      this.myBoxForCircles.nativeElement.appendChild(this.createElementAndReturnItBluePink(i, "P"));   
    }        
  }
  
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}