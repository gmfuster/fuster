import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {HeadingSubTopicDir} from '../shared/directives';
import {TopLinksComponent} from  '../shared/top-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'

@Component({
  selector: 'csharp-signalr',
  templateUrl: './csharp-signalr.component.html',
  styleUrls: [], //share the css file  
  providers: [CommonFuncs]
})

export class CSharpSignalRComponent implements OnInit {
  @ViewChildren(HeadingSubTopicDir, { read: ElementRef }) headings!:QueryList<any>;
  myHeadings : string[] = [];
  myName : string = "csharp";
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
