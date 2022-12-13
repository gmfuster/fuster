import { Component, OnInit,ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
//import {LeftLinksComponent} from  '../shared/left-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'

@Component({
  selector: 'csharp-graphql',
  templateUrl: './csharp-graphql.component.html',
  styleUrls: [], //share the css file  
  providers: [CommonFuncs]
})

export class CSharpGraphQLComponent implements OnInit {
//@ViewChildren(HeadingSubTopicDirective, { read: ElementRef }) headings!:QueryList<any>;
myHeadings : string[] = [];
myName : string = "csharp-graphql";
//@ViewChild(LeftLinksComponent, {static : true}) child! : LeftLinksComponent  ;   

  constructor(private commonFuncs:CommonFuncs){}

    ngOnInit(){
        window.scroll(0,0);
    }    
    ngAfterViewInit(){       
     // this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
      //this.child.getChangesFromParent(this.myHeadings,this.myName )    
    }  
        
}
