//import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { UntypedFormControl, NgForm } from '@angular/forms';
import {UntypedFormGroup} from '@angular/forms';
import {CommonFuncs} from '../shared/commonFuncs.service'
import {HeadingSubTopicDir} from '../shared/directives';
import {TopLinksComponent} from  '../shared/top-links.component';

@Component({
  selector: 'angular-notes-forms',
  templateUrl: './angular-notes-forms.component.html',
  styleUrls: ['./angular-notes.component.css'],
  providers: [CommonFuncs]
})

export class AngularNotesFormsComponent implements OnInit {
@ViewChild('f3') myForm : NgForm | undefined;
@ViewChild('f4') myFormSecond : NgForm | undefined;
@ViewChild('f6') myFormSix : NgForm | undefined;
@ViewChild('InputButtonGroup') myFormGroup : NgForm | undefined;
@ViewChildren(HeadingSubTopicDir, { read: ElementRef }) headings!:QueryList<any>;
  myHeadings : string[] = [];
  myName : string = "angular";
  @ViewChild(TopLinksComponent, {static : true}) child! : TopLinksComponent  ;   
optionR : string = "1";
myReactiveForm: UntypedFormGroup ; //do not just assign something here, do it in the ngOnInit.

  constructor(private commonFuncs:CommonFuncs){
    this.myReactiveForm = new UntypedFormGroup({});//just add this here to avoid the compiler error, and do it for real in the ngOnInit
  }

  ngOnInit(){
    window.scroll(0,0);
    this.myReactiveForm = new UntypedFormGroup({
      "number1" : new UntypedFormControl(),
      "number2" : new UntypedFormControl(),
      "radioButton" : new UntypedFormControl('2')
    });
  }

  ngAfterViewInit(){       
    this.myHeadings = this.commonFuncs.getIdsFromHeadingSubTopicElements(this.headings);           
    this.child.getChangesFromParent(this.myHeadings,this.myName )    
  }  
  
  onSubmit(form:any){
    alert(form);
  }
  onSubmitNA(){
    alert(this.myForm);
    //console.log(this.myFormSecond);
  }
  onSubmit6(){    
    console.log(this.myFormSix);
  }
  onSubmitGroup(){    
    console.log(this.myFormGroup);
  }
}
