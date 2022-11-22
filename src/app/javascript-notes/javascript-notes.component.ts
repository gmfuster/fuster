
import { Component, ElementRef, OnInit, ViewChild, ViewChildren,   QueryList  } from '@angular/core';
import {HeadingSubTopicDirective} from '../shared/directives';
import {LeftLinksComponent} from  '../shared/left-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'

@Component({
  selector: 'javascript-notes',
  templateUrl: './javascript-notes.component.html',
  styleUrls: ['./javascript-notes.component.css'],
  providers: [CommonFuncs]
})

export class JavaScriptNotesComponent implements OnInit {  
//@ViewChild ('topics', {static:true, read:ElementRef}) myTopicsVariable! :ElementRef;
//viewchildren doesn't allow for static true and if I set later the child is not being updated (tried different ways)
//come back to this TODO 
@ViewChildren(HeadingSubTopicDirective, { read: ElementRef }) headings!:QueryList<any>;
//@ViewChild(HeadingSubTopicDirective, {static:true, read: ElementRef }) heading! : ElementRef;
myHeadings : string[] = [];
myName : string = "javascript-notes";
@ViewChild(LeftLinksComponent, {static : true}) child! : LeftLinksComponent  ;
//@ViewChild("HeadingsContainer", {read: ViewContainerRef, static : true}) childContainer! : ViewContainerRef;

  constructor(private commonFuncs:CommonFuncs){}

  ngOnInit(){
    window.scroll(0,0);              
  }

  ngAfterViewInit(){       
    this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);       
    //TODO I cannot get the child to see the contents when using ViewChildren so doing this for now.
    this.child.getChangesFromParent(this.myHeadings,this.myName )    
  }  
}
