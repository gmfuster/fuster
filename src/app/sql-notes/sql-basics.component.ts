import { Component, OnInit,ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {HeadingSubTopicDir} from '../shared/directives';
import {TopLinksComponent} from  '../shared/top-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'

@Component({
  selector: 'sql-basics',
  templateUrl: './sql-basics.component.html',
  styleUrls: [], //share the css file  
  providers: [CommonFuncs]
})

export class SQLBasicsComponent implements OnInit {
@ViewChildren(HeadingSubTopicDir, { read: ElementRef }) headings!:QueryList<any>;
myHeadings : string[] = [];
myName : string = "sql";
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
