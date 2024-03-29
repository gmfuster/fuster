//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import {PlaceholderDirective} from '../shared/directives';
import {CommonFuncs} from '../shared/commonFuncs.service'
import { SomePopupComponent } from '../shared/some-popup.component';
import { Subscription } from 'rxjs';
import {HeadingSubTopicDir} from '../shared/directives';
import {TopLinksComponent} from  '../shared/top-links.component';

@Component({
  selector: 'angular-notes-dynamic',
  templateUrl: './angular-notes-dynamic.component.html',
  styleUrls: ['./angular-notes.component.css'],
  providers: [CommonFuncs]
})

export class AngularNotesDynamicComponent implements OnInit, OnDestroy {
  @ViewChildren(HeadingSubTopicDir, { read: ElementRef }) headings!:QueryList<any>;
  myHeadings : string[] = [];
  myName : string = "angular";
  @ViewChild(TopLinksComponent, {static : true}) child! : TopLinksComponent  ;   
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
  
  OnSetVarToShowPopup()
  {    
    this.showPopup = true;
  }
  OnHidePopup(){    
    this.showPopup = false;
  }

  OnShowProgramatically(){
    this.showPopupWithCode();
  }
  private showPopupWithCode(){
    const somePopupCompFactory = this.componentFactoryResolver.resolveComponentFactory(SomePopupComponent);
    //now with that factory we can create the component, but we also need to attach it to the DOM.
    const thePopupRef = this.popup.viewContainerRef;
    thePopupRef.clear();
    const theCreatedPopupRef = thePopupRef.createComponent(somePopupCompFactory);

    this.closeSubs = theCreatedPopupRef.instance.closeMe.subscribe(  () => {
      this.closeSubs.unsubscribe();
      thePopupRef.clear();
    })
  }

  ngOnDestroy(){
    if (this.closeSubs){
      this.closeSubs.unsubscribe();
    }
  }  
}
