import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import {HeadingSubTopicDirective} from '../shared/directives';
import {LeftLinksComponent} from  '../shared/left-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'

@Component({
  selector: 'angular-notes-somemore',
  templateUrl: './angular-notes-somemore.component.html',
  styleUrls: ['./angular-notes.component.css'],
  providers: [CommonFuncs]
})

export class AngularNotesSomeMoreComponent implements OnInit {
@ViewChildren(HeadingSubTopicDirective, { read: ElementRef }) headings!:QueryList<any>;
myHeadings : string[] = [];
myName : string = "angular-notes-somemore";
@ViewChild(LeftLinksComponent, {static : true}) child! : LeftLinksComponent  ;

  constructor(private commonFuncs:CommonFuncs, private componentFactoryResolver : ComponentFactoryResolver){    
  }

  ngOnInit(){
    window.scroll(0,0);    
  }

  ngAfterViewInit(){       
    this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
    this.child.getChangesFromParent(this.myHeadings,this.myName )    
  }  

}
