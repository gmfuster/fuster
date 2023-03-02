import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import {HeadingSubTopicDirective, PlaceholderDirective} from '../shared/directives';
import {LeftLinksComponent} from  '../shared/left-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'angular-notes-modules',
  templateUrl: './angular-notes-modules.component.html',
  styleUrls: ['./angular-notes.component.css'],
  providers: [CommonFuncs]
})

export class AngularNotesModulesComponent implements OnInit {
@ViewChildren(HeadingSubTopicDirective, { read: ElementRef }) headings!:QueryList<any>;
myHeadings : string[] = [];
myName : string = "angular-notes-modules";
@ViewChild(LeftLinksComponent, {static : true}) child! : LeftLinksComponent  ;

  constructor(private commonFuncs:CommonFuncs){
  }

  ngOnInit(){
    window.scroll(0,0);
  }

  ngAfterViewInit(){       
    this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
    this.child.getChangesFromParent(this.myHeadings,this.myName )    
  }  
}
