import { NgStyle } from '@angular/common';
import { Component, Input, Output,EventEmitter, ContentChild,ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'some-child-component',
  templateUrl: './some-child-component.component.html',
  styleUrls: ['./some-child-component.component.css']
})

export class SomeChildComponentComponent implements AfterContentInit {
  @Input() myColor :string="";
  @Input('myTextAlias') myText :string="";

  @Output() eventOnChildComponentWithKnownObjReturn = new EventEmitter<{theName:string, theText:string}>();
  @Output() eventOnChildComponentWithEventReturn = new EventEmitter<Event>();

  @ContentChild("header1",{static:true}) header1vble: ElementRef={} as ElementRef;
  @ContentChild("header2",{static:true}) header2vble: ElementRef={} as ElementRef;
  @ContentChild("span1",{static:true, read:NgStyle}) spanvble: NgStyle={} as NgStyle;
  

  launchEvents(event:Event){

    this.eventOnChildComponentWithKnownObjReturn.emit({theName:"Child Name", theText:"Child Text Hello"});
    this.eventOnChildComponentWithEventReturn.emit(event);
  }

  ngAfterContentInit(){    
    //console.log(this.header1vble);
    //console.log(this.header2vble);
    //console.log(this.spanvble);
  }

}
