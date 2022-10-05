import { Component , OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'left-links',
  templateUrl: './left-links.component.html',
  styleUrls: []
})

//TODO check with different sizes and if we need to scroll
export class LeftLinksComponent implements OnInit{   
@Input() myHeadings : string[] = [];
@Input() myName: string = "";

  constructor(private ref: ChangeDetectorRef){}
  ngOnInit(){
    window.scroll(0,0);                 
  }

  getChangesFromParent(list : string[], name:string){  
    this.myName = name;    
    //TODO find a better way for this
    this.myName = "/" + this.myName ;
    //this.myHeadings = JSON.parse(JSON.stringify(list));    
    this.myHeadings = list;
    this.ref.detectChanges();    
  }


    
}  
