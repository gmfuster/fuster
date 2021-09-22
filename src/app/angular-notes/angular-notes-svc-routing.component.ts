import { Component, OnInit } from '@angular/core';
import { MathServices, OtherServices, StringServices } from '../shared/forexamples.service';
import { Injectable } from "@angular/core";

@Component({
  selector: 'angular-notes-svc-routing',
  templateUrl: './angular-notes-svc-routing.components.html',
  styleUrls: ['./angular-notes.component.css'], //share the css file
  providers: [MathServices, StringServices]
})

@Injectable()
export class AngularNotesSvcRoutingComponent implements OnInit {
    somethingHappenedText:string = "";

    constructor (private mathServices:MathServices, private stringServices:StringServices, private otherServices:OtherServices){
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
        
}
