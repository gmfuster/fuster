import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./math-kids.component.css']
})

export class CountByComponent implements OnInit, OnDestroy  {
countingBy :number = 1;
resultsFor1: number[] = [];
resultsFor2: number[] = [];
resultsFor5: number[] = [];
resultsFor10: number[] = [];
numbersFromGrid:string[] =[];

@ViewChild("forNumbers", {static : true, read: ElementRef}) myMyNumbers! : ElementRef;

  constructor (private renderer: Renderer2){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');  
  }

  ngOnInit(){
    window.scroll(0,0);    
    this.setUpNumbers();  
    this.setUpResults();    
  }  
  countBy(num:number){
    this.countingBy = num;    
  }
  setUpNumbers(){
    let offColor = "deepskyblue";
    let onColor = "deeppink";
    for(var i = 1; i<=100; i++){
      let item = document.createElement("div");        
      item.style.backgroundColor =offColor;      
      item.style.display ="inline-block";
      item.style.margin ="10px;";
      item.style.fontSize = "3vw";
      item.style.color = "darkblue";
      item.innerHTML = i.toString();
      item.style.cursor = "none";
      item.onclick = () => {
        if (item.style.backgroundColor === offColor){
          item.style.backgroundColor = onColor;
          this.numbersFromGrid[parseInt(item.innerHTML) -1] = "on";
        }else{
          item.style.backgroundColor = offColor;
          this.numbersFromGrid[parseInt(item.innerHTML) -1] = "off";
        }
      };
      if (i%5 === 0){
        item.style.fontWeight = "bold";
      }
      this.myMyNumbers.nativeElement.appendChild(item);   
      this.numbersFromGrid.push("off");
      /*if (i%10 === 0 ){
        var thebreak = document.createElement("br");
        this.myMyNumbers.nativeElement.appendChild(thebreak);
      }*/
    }
  }
  setUpResults(){    
    for (var i=1;i<=100; i++){
      this.resultsFor1.push(i);

      if (i%2 ===0){
        this.resultsFor2.push(i);
      }

      if(i%5 === 0){
        this.resultsFor5.push(i);
      }

      if(i%10 === 0){
        this.resultsFor10.push(i);
      }
    }
  }
  checkResult(){
    var mistake:boolean = false;
    switch (this.countingBy){
      case 1:
        this.numbersFromGrid.forEach(element => {          
          if (element === "off"){
            mistake = true;
          }
        });
        break;
      case 2:
        this.numbersFromGrid.forEach(element => {          
          if (element === "off"){
            mistake = true;
          }
        });
        break;
      case 5:
        break;
      case 10:
        break;
      default:
        break;
    }

  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}