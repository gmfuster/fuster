//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'angular-notes-http',
  templateUrl: './angular-notes-http.component.html',
  styleUrls: ['./angular-notes.component.css']
})

export class AngularNotesHttpComponent implements OnInit {

  constructor(private http : HttpClient){
  }

  ngOnInit(){
    window.scroll(0,0);
  }

  onSendAPostCliked(){    
    var test = { 
      name:"Michael", 
      lastname:"Jackson"
    }
    
  }
}
