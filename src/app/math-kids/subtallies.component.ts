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
    thediv.style.color = "lightyellow";
    thediv.style.padding = "0.2vw";
    thediv.style.borderRadius = "50%";
    thediv.style.backgroundColor = "teal";
    (type === tallyType.crossed)? thediv.innerText = "Ø": thediv.innerText = "0";
    /*if (type === tallyType.crossed){
      thediv.style.transform = "rotate(130deg)";
    } */
    
    let endLeftposition  = (iteration * 4).toString()+"%";
    let startLeftPosition = (iteration * 0.5).toString()+"%";
    let secondLeftPosition = (iteration * 1).toString()+"%";
    let thirdLeftPosition = (iteration * 2).toString()+"%";
    let fourthLeftPosition = (iteration * 3).toString()+"%";

    if (type === tallyType.regular){
      setTimeout(() => {              
        thediv.animate( [{ top: "1%", left:startLeftPosition }, { top:"25%", left:secondLeftPosition}, {top:"40%", left:thirdLeftPosition}, {top:"45%", left:fourthLeftPosition}, 
        {top :"50%", left: endLeftposition}]  ,      
          {  delay: 100,  duration: 1000, fill: "forwards"})
        }, 500);                    
    }else{
      setTimeout(() => {              
        thediv.animate( [{ top: "1%", left:startLeftPosition }, { top:"25%", left:secondLeftPosition}, {top:"50%", left:thirdLeftPosition}, {top:"60%", left:fourthLeftPosition}, 
        {top :"70%", left: endLeftposition}]  ,      
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