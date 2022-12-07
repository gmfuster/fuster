
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'node-notes-graphql',
  templateUrl: './node-notes-graphql.component.html', 
  providers: [] 
})

export class NodeNotesGraphQLComponent implements OnInit {    
  myHeadings : string[] = [];
  myName : string = "node-notes-graphql";  

  constructor(){}
  ngOnInit(){
    window.scroll(0,0);
  }  
}
