import { Component, Input } from '@angular/core';

@Component({
  selector: 'some-child-component',
  templateUrl: './some-child-component.component.html',
  styleUrls: ['./some-child-component.component.css']
})

export class SomeChildComponentComponent {
  @Input() myColor :string="";
  @Input('myTextAlias') myText :string="";
  
}
