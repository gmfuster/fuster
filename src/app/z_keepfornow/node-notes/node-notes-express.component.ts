
import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList} from '@angular/core';
import {HeadingSubTopicDirective} from '../shared/directives';
import {LeftLinksComponent} from  '../shared/left-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'

@Component({
  selector: 'node-notes-express',
  templateUrl: './node-notes-express.component.html', 
  providers: [CommonFuncs] 
})

export class NodeNotesExpressComponent implements OnInit {  
 // @ViewChildren(HeadingSubTopicDirective, { read: ElementRef }) headings!:QueryList<any>;
  myHeadings : string[] = [];
  myName : string = "node-notes-express";
 // @ViewChild(LeftLinksComponent, {static : true}) child! : LeftLinksComponent  ;

  constructor(private commonFuncs:CommonFuncs){}
  ngOnInit(){
    window.scroll(0,0);
  }
  ngAfterViewInit(){       
    //this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
   // this.child.getChangesFromParent(this.myHeadings,this.myName )    
  }  
}
