import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
visibleIs:string ="";
  constructor() { }

  ngOnInit(): void {
  }

  setVisibleTo(value:string){
    this.visibleIs = value;
    window.scroll(0,0);
  }

}
