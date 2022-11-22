import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
visibleIs:string ="";
  constructor() { }

  ngOnInit(): void {
  }

  setVisibleTo(value:string){
    this.visibleIs = value;
  }

}
