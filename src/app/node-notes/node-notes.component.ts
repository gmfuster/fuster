
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'node-notes',
  templateUrl: './node-notes.component.html',
  //styleUrls: ['./javascript-notes.component.css']
})

export class NodeNotesComponent implements OnInit {  

  ngOnInit(){
    window.scroll(0,0);
  }
  
}
