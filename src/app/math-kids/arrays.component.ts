import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./math-kids.component.css'],
  providers: []
})

export class ArraysComponent implements OnInit, OnDestroy  {
@ViewChild("boxForCells", {static:true, read:ElementRef}) myBoxForCells! : ElementRef;
columns:number = 0;
rows:number = 0;
itemsThatNeedToBeCounted:number[] = [];
stringForAddingColumns:string = "";
stringForAddingRows:string = ""

  constructor (private renderer: Renderer2){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);    
   this.setUpCells();
  }  
  
  setUpNumbersToShowWithBackground(){
  //set items that need to be counted.
  this.itemsThatNeedToBeCounted.length = 0;
  if (this.rows > 0){
    for (var i=1; i<= this.rows; i++){
      let firstElementOfRow = 1 + (i-1) * 10;
      this.itemsThatNeedToBeCounted.push(firstElementOfRow);
      if (this.columns){
        for( var j = 2; j<= this.columns; j++){
          this.itemsThatNeedToBeCounted.push(firstElementOfRow+j-1)
        }
      }
    }    
}
  }    

  setUpCells(){         

    this.setUpNumbersToShowWithBackground();    
    //remove all the itmes before adding new ones.    
    while (this.myBoxForCells.nativeElement.firstChild) {
      this.myBoxForCells.nativeElement.removeChild(this.myBoxForCells.nativeElement.firstChild);
    }   
      
    for(var i = 1; i<=100; i++){
        let item = document.createElement("div");                
        item.style.display ="inline-block";
        item.style.margin ="10px;";
        item.style.fontSize = "3vw";
        item.style.color = "darkblue";        
        item.style.cursor = "none";    
        item.style.border = "deepskyblue 3px solid";
        item.style.width = "3vw";
        item.style.height = "3vw";
        //set the background to something else if there are rows and columns set.
        if (this.itemsThatNeedToBeCounted.includes(i)){
          item.style.backgroundColor = "deepskyblue";
        }
        this.myBoxForCells.nativeElement.appendChild(item);
    }
      
  }

  showThemNow(){    
    this.setUpCells();
    this.calculateStringsForAddition();
  }
  resetThemNow(){
    this.rows = 0;
    this.columns = 0;
    this.setUpCells();
  }

  calculateStringsForAddition(){
    this.stringForAddingRows = "";
    this.stringForAddingColumns = "";
    var realRows = this.rows;
    var realColumns = this.columns;

    //if we have a row we also have at least one column, and if we have a column we also have at least one row
    if (this.rows === 0 && this.columns > 0 ){
      realRows = 1;
    }
    if (this.columns === 0 && this.rows > 0 ){
      realColumns = 1;
    }
    //for adding rows
    for(var i=1; i<= realRows; i++){
      if (i === realRows){
        this.stringForAddingRows += realColumns.toString();
      }        
      else{
        this.stringForAddingRows += realColumns.toString() + " + ";
      }
    }
    //for adding cols
    for(var i=1; i<= realColumns; i++){
      if (i === realColumns){
        this.stringForAddingColumns += realRows.toString();
      }        
      else{
        this.stringForAddingColumns += realRows.toString() + " + ";
      }
    }
  }
  changeRows(option:string){    
    //this.resetTable(true);
    if (option === "+")
    {
      if (this.rows < 10)
        this.rows++;
        //this.setUpCells();
    }
    else 
    {
      if (this.rows > 0)
        this.rows--;
        //this.setUpCells();
    }
     
  }
  changeColumns(option:string){
    //this.resetTable(true);
    if (option === "+")
    {
      if (this.columns < 10)
        this.columns++;
        //this.setUpCells();
    }      
    else {
      if (this.columns > 0)
        this.columns--;
        //this.setUpCells();
    }
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}