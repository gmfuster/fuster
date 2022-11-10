import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../shared/commonFuncs.service';

enum tallyType { regular, crossed }

@Component({
  selector: 'subtallies',
  templateUrl: './subtallies.component.html',
  styleUrls: ['./math-kids.component.css'],
  providers: [CommonFuncs]
})


export class SubtalliesComponent implements OnInit, OnDestroy  {
@ViewChild("boxForTallies", {static:false, read:ElementRef}) myBoxForTallies! : ElementRef ;
random1:number = 0;
random2:number = 0;
total: number = this.random1 + this.random2;
random1String:string = "?";
random2String:string = "?";
totalString:string = "?";
showFirstNumber:boolean = true;
maxNumber:number = 20; //this is going to matter for the animation

  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);    
     
  }  
  
  setRandomNums(){
    this.random1String = "?";
    this.random2String = "?";
    this.totalString = "?";

    while (this.myBoxForTallies.nativeElement.firstChild) {
      this.myBoxForTallies.nativeElement.removeChild(this.myBoxForTallies.nativeElement.firstChild);
    } 

    this.random1 = this.commonFuncs.getRandom1ToN(this.maxNumber);
    this.random2 = this.commonFuncs.getRandom1ToN(this.maxNumber);    

    if(this.random1 < this.random2){
      [this.random1, this.random2] = [this.random2, this.random1];
    }

    (this.commonFuncs.getRandom1ToN(2)) === 1? this.showFirstNumber = true : this.showFirstNumber = false;

    if(this.showFirstNumber){
      this.random1String = this.random1.toString();
    }else{
      this.random2String = this.random2.toString();
    }
    this.total = this.random1 - this.random2;
    this.totalString = this.total.toString();

    //this.showTallies();
  }

  createElementAndReturnTally(iteration:number, type:tallyType){
    let thediv = document.createElement("div") as HTMLDivElement;
    thediv = document.createElement("div") as HTMLDivElement;
           
    thediv.style.position = "absolute"; 
    thediv.style.fontSize = "6vh";    
    (type === tallyType.crossed)? thediv.innerText = "Ø": thediv.innerText = "0";
    /*if (type === tallyType.crossed){
      thediv.style.transform = "rotate(130deg)";
    } */
    

    if (type === tallyType.regular){
      setTimeout(() => {              
        thediv.animate( [{ top: "1%" }, { top:"25%"}, {top:"40%"}, {top:"45%"}, 
        {top :"50%", left: (iteration * 5).toString()+"%"}]  ,      
          {  delay: 100,  duration: 1000, fill: "forwards"})
        }, 500);                    
    }else{
      setTimeout(() => {              
        thediv.animate( [{ top: "1%" }, { top:"25%"}, {top:"50%"}, {top:"60%"}, 
        {top :"70%", left: (iteration * 5).toString()+"%"}]  ,      
          {  delay: 100,  duration: 1000, fill: "forwards"})
        }, 500);                    
    }                                           
    return thediv;
  }
  

  showTallies(){    
    //remove existing ones
    while (this.myBoxForTallies.nativeElement.firstChild) {
      this.myBoxForTallies.nativeElement.removeChild(this.myBoxForTallies.nativeElement.firstChild);
    } 

    if (this.showFirstNumber){
      //show as crossed random1 - result
      //show as tallies the result
      for(let i=1; i<= (this.random1 - this.total); i++){    
        this.myBoxForTallies.nativeElement.appendChild(this.createElementAndReturnTally(i, tallyType.crossed));   
      }
      for(let i=1; i<= this.total; i++){    
        this.myBoxForTallies.nativeElement.appendChild(this.createElementAndReturnTally(i, tallyType.regular));   
      }      
    }else{
      //cross random2
      //add tallies for the result
      for(let i=1; i<= this.random2 ; i++){    
        this.myBoxForTallies.nativeElement.appendChild(this.createElementAndReturnTally(i, tallyType.crossed));   
      }
      for(let i=1; i<= this.total; i++){    
        this.myBoxForTallies.nativeElement.appendChild(this.createElementAndReturnTally(i, tallyType.regular));   
      } 
    }  
    this.random1String = this.random1.toString();
    this.random2String = this.random2.toString();      
  }
  
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}