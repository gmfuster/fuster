//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';


interface ForSend{
  name: string
}

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
    
  }
  onSendAGetCliked(){    
    
    this.http.get<ForSend[]>("http://localhost:3000/sendAGet", 
      {
        headers :new HttpHeaders( { 'content-type': 'application/json'}) ,
        observe : 'body'
      }).pipe(
      map(  
        (value ) => 
          {                       
            for (var v = 0; v < 4; v++ )
            {            
              //value[v].name += " changed it!";
            }               
            return value;      
          }        
        )
      ).subscribe( responseData => 
      {        
        console.log(responseData);
      },
      error => {
        alert("Oh my something happened");
      });

  }    

}
