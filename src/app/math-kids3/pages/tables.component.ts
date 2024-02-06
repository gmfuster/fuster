import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonFuncs } from '../../shared/commonFuncs.service';

@Component({
  selector: 'tables',
  templateUrl: './tables.component.html',
  styleUrls: ['../../math-kids/math-kids.component.css'],
  providers:[CommonFuncs]
})

export class TablesComponent implements OnInit, OnDestroy  {
 numberForAllTables:number = 0;
 numberTable:number =0;
 arrayOfCheckedTables:number[] = []
 selectSomeTables:string = "Select Some Tables, then click Go ->"
 numberOfCorrectOnes = 0;
 result!:number | null;
 myGuess!:number | null;

  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);       
  }  
  
  sendTimes(){
    let found = false;

    if(this.arrayOfCheckedTables.length === 0){      
      return;
    }
    this.numberForAllTables = this.commonFuncs.getRandom0ToN(11);
    let takeTable = this.commonFuncs.getRandom0ToN(this.arrayOfCheckedTables.length)
    this.numberTable = this.arrayOfCheckedTables[takeTable];
    this.myGuess = null;
  }

  onTableCheckboxChanged(event:any, i:number){
    if (event.target.checked)
    {
      this.arrayOfCheckedTables.push(i);
    }
    else{
      let index = this.arrayOfCheckedTables.indexOf(i);
      if (index !=null && index != undefined){
        if (index > -1) { 
          this.arrayOfCheckedTables.splice(index, 1); 
        }
      }
    }
  }

  onCheck(){
    this.result = this.numberForAllTables * this.numberTable;
    /*
    if (this.myGuess === (this.numberForAllTables * this.numberTable)){
      this.numberOfCorrectOnes++;
    }else{
      this.numberOfCorrectOnes--;
    }
    */
  }

  addDigit(x: number | null){
    if (this.myGuess !== null && x !== null ){
      this.myGuess = this.myGuess * 10 + x;
    }
    else{
      this.myGuess = x;
    }
    
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}