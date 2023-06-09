import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import {CommonFuncs} from '../shared/commonFuncs.service'
import {HeadingSubTopicDir} from '../shared/directives';
import {TopLinksComponent} from  '../shared/top-links.component';

@Component({
  selector: 'angular-notes-somemore',
  templateUrl: './angular-notes-somemore.component.html',
  styleUrls: ['./angular-notes.component.css'],
  providers: [CommonFuncs]
})

export class AngularNotesSomeMoreComponent implements OnInit {
  @ViewChildren(HeadingSubTopicDir, { read: ElementRef }) headings!:QueryList<any>;
  myHeadings : string[] = [];
  myName : string = "angular";
  @ViewChild(TopLinksComponent, {static : true}) child! : TopLinksComponent  ;   

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
