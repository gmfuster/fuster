//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
//import {HeadingSubTopicDirective} from '../shared/directives';
import {HeadingSubTopicDir} from '../shared/directives';
//import {LeftLinksComponent} from  '../shared/left-links.component';
import {TopLinksComponent} from  '../shared/top-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'


@Component({
  selector: 'angular-notes-auth',
  templateUrl: './angular-notes-auth.component.html',
  styleUrls: ['./angular-notes.component.css'],
  providers: [CommonFuncs]
})

export class AngularNotesAuthComponent implements OnInit {
/*@ViewChildren(HeadingSubTopicDirective, { read: ElementRef }) headings!:QueryList<any>;
myHeadings : string[] = [];
myName : string = "angular-notes-auth";
@ViewChild(LeftLinksComponent, {static : true}) child! : LeftLinksComponent  ;*/
@ViewChildren(HeadingSubTopicDir, { read: ElementRef }) headings!:QueryList<any>;
  myHeadings : string[] = [];
  myName : string = "angular";
  @ViewChild(TopLinksComponent, {static : true}) child! : TopLinksComponent  ;   
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
