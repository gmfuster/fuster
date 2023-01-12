import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'react-notes',
  templateUrl: './react-notes.component.html',
  styleUrls: ['./react-notes.component.css'],  
})

export class ReactNotesComponent implements OnInit {


  constructor(){}

  ngOnInit(){
    window.scroll(0,0);
  }
}
