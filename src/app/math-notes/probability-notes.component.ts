import { Component, OnInit } from '@angular/core';
//declare function getRandom1ToN(n:number):any;
import { getRandom1ToN } from '../../assets/sharedFunctions';


@Component({
  selector: 'probability-notes',
  templateUrl: './probability-notes.component.html',
  styleUrls: ['.math-notes.component.css']
})

export class ProbabilityNotesComponent implements OnInit {
  //letterOutcomes:string[]=[];
  numberOfAs = 0;
  numberOfCs = 0;
  numberOfDs = 0;
  //letterOutcomesString="";

  ngOnInit(){
    window.scroll(0,0);
  }
  
  onClickGetAACDtrials(){   
    let l = null; 
    this.numberOfAs = 0;
    this.numberOfCs = 0;
    this.numberOfDs=0;
    for (let i = 1; i <=50; i++ ){
      l = getRandom1ToN(4);    
      switch (l){
        case 1:
        case 2:
          //this.letterOutcomes.push('A');
          this.numberOfAs++
          break;
        case 3:
          //this.letterOutcomes.push('C');
          this.numberOfCs++
          break;
        case 4:
          //this.letterOutcomes.push('D');
          this.numberOfDs++
          break;
      }
    }
    //this.letterOutcomesString = this.letterOutcomes.toString();    
  }
}
