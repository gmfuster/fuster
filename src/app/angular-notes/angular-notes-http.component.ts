import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonFuncs} from '../shared/commonFuncs.service'
import {HeadingSubTopicDir} from '../shared/directives';
import {TopLinksComponent} from  '../shared/top-links.component';


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
  @ViewChildren(HeadingSubTopicDir, { read: ElementRef }) headings!:QueryList<any>;
  myHeadings : string[] = [];
  myName : string = "angular";
  @ViewChild(TopLinksComponent, {static : true}) child! : TopLinksComponent  ;   

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
