import { Component, OnInit,ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
//import {HeadingSubTopicDirective} from '../shared/directives';
//import {LeftLinksComponent} from  '../shared/left-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'

@Component({
  selector: 'csharp-interfaces',
  templateUrl: './csharp-interfaces.component.html',
  styleUrls: [], //share the css file  
  providers: [CommonFuncs]
})

export class CSharpInterfacesComponent implements OnInit {
  //@ViewChildren(HeadingSubTopicDirective, { read: ElementRef }) headings!:QueryList<any>;
  myHeadings : string[] = [];
  myName : string = "csharp-interfaces";
  //@ViewChild(LeftLinksComponent, {static : true}) child! : LeftLinksComponent  ;

  constructor(private commonFuncs:CommonFuncs){}
    ngOnInit(){
        window.scroll(0,0);
    }    
    ngAfterViewInit(){       
      //this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
      //this.child.getChangesFromParent(this.myHeadings,this.myName )    
    }     
}
