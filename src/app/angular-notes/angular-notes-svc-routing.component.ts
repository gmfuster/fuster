import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MathServices, OtherServices, StringServices } from '../shared/forexamples.service';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import {CommonFuncs} from '../shared/commonFuncs.service'
import {HeadingSubTopicDir} from '../shared/directives';
import {TopLinksComponent} from  '../shared/top-links.component';

@Component({
  selector: 'angular-notes-svc-routing',
  templateUrl: './angular-notes-svc-routing.components.html',
  styleUrls: ['./angular-notes.component.css'], //share the css file
  providers: [MathServices, StringServices,CommonFuncs]
})

@Injectable()
export class AngularNotesSvcRoutingComponent implements OnInit {
    @ViewChildren(HeadingSubTopicDir, { read: ElementRef }) headings!:QueryList<any>;
    myHeadings : string[] = [];
    myName : string = "angular";
    @ViewChild(TopLinksComponent, {static : true}) child! : TopLinksComponent  ;  

    somethingHappenedText:string = "";

    constructor (private mathServices:MathServices, private stringServices:StringServices, 
        private otherServices:OtherServices, private router:Router, private commonFuncs:CommonFuncs){
        this.otherServices.somethingHappened.subscribe( 
            (text:string) =>{ this.somethingHappenedText = text;}
        );
    }

    ngOnInit(){
        window.scroll(0,0);
    }

    onClickMeClicked(){        
        var num = this.mathServices.getRandom1ToN(10);
        alert(num);
    }

    onClickMeClicked2(){
        var s = this.stringServices.getAString();
        alert(s);
    }
    onClickMeClicked3(){
        var s = this.otherServices.getAHeart();
        alert(s);
    }

    onClickMeClicked4(){        
       this.otherServices.callMeToEmitEvent();        
    }
        
    onClickToRouteSomewhereElse(){
        this.router.navigate(["/read-back"]);
    }
    onDynamicNotesClicked(id?:number){
        let sendId = 999;
        if (id !== null && id !== undefined){
            sendId=id;
        }          
        this.router.navigate(["/dynamic-notes/" + sendId]);    
    }
    ngAfterViewInit(){       
        this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
        this.child.getChangesFromParent(this.myHeadings,this.myName )    
      }  
}
