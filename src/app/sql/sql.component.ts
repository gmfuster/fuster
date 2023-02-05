import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SQLComponent implements OnInit {
visibleIs:string ="";
  constructor() { }

  ngOnInit(): void {
  }

  setVisibleTo(value:string){
    this.visibleIs = value;
  }

}
