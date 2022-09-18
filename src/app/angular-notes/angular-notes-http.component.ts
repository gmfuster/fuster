//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HeadingSubTopicDirective} from '../shared/directives';
import {LeftLinksComponent} from  '../shared/left-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'


interface ForSend{
  name: string
}

@Component({
  selector: 'angular-notes-http',
  templateUrl: './angular-notes-http.component.html',
  styleUrls: ['./angular-notes.component.css'],
  providers: [CommonFuncs]
})


export class AngularNotesHttpComponent implements OnInit {
  @ViewChildren(HeadingSubTopicDirective, { read: ElementRef }) headings!:QueryList<any>;
  myHeadings : string[] = [];
  myName : string = "angular-notes-http";
  @ViewChild(LeftLinksComponent, {static : true}) child! : LeftLinksComponent  ;

  constructor(private http : HttpClient, private commonFuncs:CommonFuncs){
  }

  ngOnInit(){
    window.scroll(0,0);
  }
  ngAfterViewInit(){       
    this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
    this.child.getChangesFromParent(this.myHeadings,this.myName )    
  }  
  onSendAPostCliked(){    
    
  }
  onSendAGetCliked(){    
    
   

  }    

}
