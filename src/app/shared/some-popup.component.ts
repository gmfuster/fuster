import { Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'some-popup',
  templateUrl: './some-popup.component.html',
  styleUrls: ['./some-popup.component.css'],
})

export class SomePopupComponent  {
@Output() closeMe = new EventEmitter<void>();

  OnSendCloseToParent(){    
    this.closeMe.emit();
  }

}