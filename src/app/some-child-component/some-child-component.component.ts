import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'some-child-component',
  templateUrl: './some-child-component.component.html',
  styleUrls: ['./some-child-component.component.css']
})

export class SomeChildComponentComponent {
  @Input() myColor :string="";
  @Input('myTextAlias') myText :string="";

  @Output() eventOnChildComponentWithKnownObjReturn = new EventEmitter<{theName:string, theText:string}>();
  @Output() eventOnChildComponentWithEventReturn = new EventEmitter<Event>();

  launchEvents(event:Event){

    this.eventOnChildComponentWithKnownObjReturn.emit({theName:"Child Name", theText:"Child Text Hello"});
    this.eventOnChildComponentWithEventReturn.emit(event);
  }

}
