import { Component, OnInit, PipeTransform ,Pipe, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { ForCanDeActivate } from '../shared/forCanActivate.service';
import {HeadingSubTopicDirective} from '../shared/directives';
import {LeftLinksComponent} from  '../shared/left-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'angular-notes',
  templateUrl: './angular-notes.component.html',
  styleUrls: ['./angular-notes.component.css'],
  providers: [CommonFuncs],
  animations: [
    trigger('theDivState', [      
      state('default', style({        
        backgroundColor: 'lightblue'
      })),
      state('pink', style({       
        backgroundColor: 'deeppink'
      })),
      state('green', style({       
        backgroundColor: 'green'
      })),
      transition('default => pink', [
        animate('2s')
      ]),
      transition('* => green', [
        animate('1s')
      ]),
    ]),
  ],
    })

export class AngularNotesComponent implements OnInit, ForCanDeActivate {
@ViewChildren(HeadingSubTopicDirective, { read: ElementRef }) headings!:QueryList<any>;
myHeadings : string[] = [];
myName : string = "angular-notes";
@ViewChild(LeftLinksComponent, {static : true}) child! : LeftLinksComponent  ;
  theState : string = "default";

  theVariable :string =  "" ;
  theBoolVar: boolean = true;
  theBoolVar2: boolean = false;
  theColor: string = "aqua";
  theNumVariable: Number = 0;
  theNumArray: Number[] = []  
  theArraySize:number = 0;
  someText1:string = "";
  someText2:string = "";  
  fontColor:string = "blue";  
  someDate:string = Date();
  someStringForPipes = "This file has less than 100 lines at this point " 

  constructor(private commonFuncs:CommonFuncs){}

  ngOnInit(){
    window.scroll(0,0);
  }
  ngAfterViewInit(){       
    this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
    this.child.getChangesFromParent(this.myHeadings,this.myName )    
  } 

  onChangeDivClicked(){

    (this.theState === "default") ? this.theState = "pink" : this.theState = "default";
  }
  onChangeDivClickedGreen(){
    this.theState = "green";
  }
  onClickButton1(s: string) {
    this.theVariable = s + "-" + "changed";
  }

  onSwitchTheBoolVar() {    
    this.theBoolVar = !this.theBoolVar;    
  }

  onSetVariableToHello() {
    this.theVariable = "hello";
  }

  onRandomColor(){   
    //todo random function to use in common
    //between 2 numbers Math.floor(Math.random() * (max - min + 1)) + min;
    // Between 0 and max Math.floor(Math.random() * (max + 1));
    // Between 1 and max Math.floor(Math.random() * max) + 1;     

    switch(Math.floor(Math.random() * 6) + 1){
      case 1: this.theColor= "aqua";
              break;
      case 2: this.theColor="red";
              break;
      case 3: this.theColor="pink";
              break;
      case 4: this.theColor="yellow";
              break;
      case 5: this.theColor="green";
              break;
      case 6: this.theColor="gray";
              break;
      default: this.theColor = "aqua";
              break;

    }      
  }

  onValueChanged(event:KeyboardEvent){
    this.theNumArray = [];
    for(let i = 1; i <= parseInt(event.key); i++){
      this.theNumArray[i-1] = i;
    }    
  }
  onValueChangedArrows(event:Event){
    this.theNumArray = [];
    for(let i = 1; i <= this.theArraySize; i++){
      this.theNumArray[i-1] = i;
    }    
  }

  //using any so I can use this event for all events from child.
  onChildEvent1(event:Event){    
    this.someText1 = JSON.stringify(event.target);

  }
  onChildEvent2(theEventObj:{theName:string, theText:string}){    
    this.someText2 = theEventObj.theName + "-" + theEventObj.theText;

  }

  canDeactivate(): Promise<boolean> | Observable<boolean> | boolean
  {
    //logic to decide whether we can leave the route or not
      //alert("Can I deactivate? yes");
      return true;
  }
}

//instead of specific file just add here since it's just for the example.
@Pipe({
  name: 'myOwnPipe'
})
export class MyOwnPipePipe implements PipeTransform{
  transform(value:any){
    return "♫ " + value + " ♫";
  }
}

@Pipe({
  name: 'myOwnPipeParam'
})
export class MyOwnPipeParamsPipe implements PipeTransform{
  transform(value:any, num :number){
    var myS:string =  "♫ " + value + " ♫";
    for (var i = 1; i<=num; i++){
      //console.log(myS);
      myS += " ♫";
    }
    return myS;
  }
}
