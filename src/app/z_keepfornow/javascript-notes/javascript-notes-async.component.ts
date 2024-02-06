import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {HeadingSubTopicDir} from '../shared/directives';
import {TopLinksComponent} from  '../shared/top-links.component';

import {CommonFuncs} from '../shared/commonFuncs.service'

@Component({
  selector: 'javascript-notes-async',
  templateUrl: './javascript-notes-async.component.html',
  styleUrls: ['./javascript-notes.component.css'],
  providers: [CommonFuncs]
})

export class JavaScriptNotesAsyncComponent implements OnInit {  
@ViewChildren(HeadingSubTopicDir, { read: ElementRef }) headings!:QueryList<any>;
myHeadings : string[] = [];
myName : string = "javascript";
@ViewChild(TopLinksComponent, {static : true}) child! : TopLinksComponent  ;

  constructor(private commonFuncs:CommonFuncs){}

  ngOnInit(){
    window.scroll(0,0);    
  }

  ngAfterViewInit(){       
    this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
    this.child.getChangesFromParent(this.myHeadings,this.myName )        
  }  
}