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
numbersFromGrid: {number:number, status:string}[] =[];
showOption:string = "Blank";

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
    this.reset();
    this.countingBy = num;    
  }
  setUpNumbers(){
    let offColor = "deepskyblue";
    let onColor = "deeppink";
    
    //remove all the itmes before adding new ones.    
    while (this.myMyNumbers.nativeElement.firstChild) {
      this.myMyNumbers.nativeElement.removeChild(this.myMyNumbers.nativeElement.firstChild);
    }    
    //also reset the grid
    this.numbersFromGrid.length = 0;
    for(var i = 1; i<=100; i++){
      let item = document.createElement("div");        
      item.style.backgroundColor =offColor;      
      item.style.display ="inline-block";
      item.style.margin ="10px;";
      item.style.fontSize = "3vh;";
      item.style.color = "darkblue";
      item.innerHTML = i.toString();
      item.style.cursor = "none";
      item.style.backgroundColor === offColor;
      item.style.cursor = "pointer";
      item.onclick = () => {
        if (item.style.backgroundColor === offColor){
          item.style.backgroundColor = onColor;          
          this.numbersFromGrid[parseInt(item.innerHTML) -1] = {number: parseInt(item.innerHTML), status:"on" };
        }else{
          item.style.backgroundColor = offColor;
          this.numbersFromGrid[parseInt(item.innerHTML) -1] = {number: parseInt(item.innerHTML), status:"off" };
        }        
      };
      if (i%5 === 0){
        item.style.fontWeight = "bold";
      }
      this.myMyNumbers.nativeElement.appendChild(item);   
      this.numbersFromGrid.push({number: i, status:"off" });     
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
    var resultsArray: {number:Number, status:string} [] = [];

    resultsArray.length = 0;        

    switch (this.countingBy){
      case 1:
        resultsArray = this.numbersFromGrid.filter(element =>  element.status === "off");
        if (resultsArray.length > 0) { mistake = true;}
        break;
      case 2:
        resultsArray = this.numbersFromGrid.filter(element => element.number%2 === 0 && element.status === "off");
        if (resultsArray.length > 0) { mistake = true;}
        resultsArray = this.numbersFromGrid.filter(element => element.number%2 !== 0 && element.status === "on");
        if (resultsArray.length > 0) { mistake = true;}
        resultsArray = this.numbersFromGrid.filter(element => element.number%2 !== 0 && element.status === "on");
        break;
      case 5:
        resultsArray = this.numbersFromGrid.filter(element => element.number%5 === 0 && element.status === "off");
        if (resultsArray.length > 0) { mistake = true;}
        resultsArray = this.numbersFromGrid.filter(element => element.number%5 !== 0 && element.status === "on");
        if (resultsArray.length > 0) { mistake = true;}        
        break;
      case 10:
        resultsArray = this.numbersFromGrid.filter(element => element.number%10 === 0 && element.status === "off");
        if (resultsArray.length > 0) { mistake = true;}
        resultsArray = this.numbersFromGrid.filter(element => element.number%10 !== 0 && element.status === "on");
        if (resultsArray.length > 0) { mistake = true;}        
        break;
        break;
      default:
        break;
    }
    (mistake)? this.showOption = "Red" : this.showOption = "Green";    

  }
  reset(){
    this.setUpNumbers();  
    this.showOption = "Blank";
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}