import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
visibleIs:string ="";
  constructor() { }

  ngOnInit(): void {
  }

  setVisibleTo(value:string){
    this.visibleIs = value;
  }

}
