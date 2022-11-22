import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {HeadingSubTopicDirective, PlaceholderDirective} from '../shared/directives';
import {LeftLinksComponent} from  '../shared/left-links.component';
import {CommonFuncs} from '../shared/commonFuncs.service'
import { SomePopupComponent } from '../shared/some-popup.component';
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
@ViewChild(PlaceholderDirective, {static : false}) popup! : PlaceholderDirective;
showPopup : boolean = false;
private closeSubs : Subscription = new Subscription();

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
