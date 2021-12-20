
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'javascript-notes',
  templateUrl: './javascript-notes.component.html',
  styleUrls: ['./javascript-notes.component.css']
})

export class JavaScriptNotesComponent implements OnInit {  

  ngOnInit(){
    window.scroll(0,0);
  }
  
}
