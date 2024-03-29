import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'number-chart',
  templateUrl: './number-chart.component.html',
  styleUrls: ['../math-kids.component.css']
})

export class NumberChartComponent implements OnInit, OnDestroy  {
 @ViewChild("divForNumberChart", {static:true} ) myDivForNumberChart!: ElementRef;
 @ViewChild("upDownSlider", {static:true} ) myUpDownSlider!: ElementRef;

 currentColValue: number = 1;

  constructor (private renderer: Renderer2){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');  
  }

  ngOnInit(){
    window.scroll(0,0);        
    this.loadTable();
  }
  
  loadTable(){
    const borderST = "deepskyblue solid 2px";
    var divForNumberChart = document.getElementById("divForNumberChart");
    var table = document.createElement("table");
    table.style.border = borderST
    table.style.textAlign = "center";
    table.style.margin = "auto";                
    table.style.fontSize = "3vh";
    table.style.width = "50vw";
    table.style.height = "50vh";
    if (divForNumberChart === null){
      return;
    }
    divForNumberChart.appendChild(table);
    for(let i=1; i<=10; i++)
    {
      var row = document.createElement("tr");
      table.appendChild(row);
      for (let j= 1; j <= 10; j++){
        var data = document.createElement("td");
        data.style.border = borderST;   
        let textS = (j + (i*10) -10).toString();
        var text = document.createTextNode(textS);
        data.id =textS ;
        data.appendChild(text);
        row.appendChild(data);
       }
    }
    var firstInTable = document.getElementById("1");
    if( firstInTable !== null){firstInTable.style.backgroundColor = "deepskyblue";}    
  }

  showInTableLeftRight(rangeVal:string){     
    this.myUpDownSlider.nativeElement.value = 1;     
    this.currentColValue = parseInt(rangeVal);            
    var cell = document.getElementById(rangeVal.toString());
    for(let i=1; i<= parseInt(rangeVal); i++){
        let cellAfter = document.getElementById(i.toString());
        if (cellAfter !== null){cellAfter.style.backgroundColor = "deepskyblue";}        
    }                
    let startAt = parseInt(rangeVal) + 1;
    for(let i= startAt; i<=100; i++){
        let cellAfter = document.getElementById(i.toString());
        if (cellAfter !== null){cellAfter.style.backgroundColor = "transparent";}        
    }                
}
  showInTableUpDown(rangeVal:string){     
    console.log(rangeVal);       
    var realRange =  parseInt(rangeVal) + this.currentColValue;                           
    var cell = document.getElementById(realRange.toString());
    for(let i=1; i<=realRange; i++){
        let cellAfter = document.getElementById(i.toString());
        if (cellAfter !== null){cellAfter.style.backgroundColor = "deepskyblue";}        
    }                
    let startAt = realRange + 1;
    for(let i= startAt; i<=100; i++){
        let cellAfter = document.getElementById(i.toString());
        if (cellAfter !== null){cellAfter.style.backgroundColor = "transparent";}        
    }                
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}
