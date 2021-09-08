import { Component, OnInit } from '@angular/core';
declare function getRandom1ToN(n:number):any;


@Component({
  selector: 'probability-notes',
  templateUrl: './probability-notes.component.html',
  styleUrls: ['./probability-notes.component.css']
})

export class ProbabilityNotesComponent implements OnInit {
  letterOutcomes:string[]=[];

  ngOnInit(){
    window.scroll(0,0);
  }
  
  onClickGetAACDtrials(){
    console.log(1);
    let l = getRandom1ToN(4);
    console.log(l);
  }
}
