import { Component , OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'left-links',
  templateUrl: './left-links.component.html',
  styleUrls: []
})

export class LeftLinksComponent implements OnInit{   
@Input() myHeadings : string[] = [];
@Input() myName: string = "";

  constructor(private ref: ChangeDetectorRef){}
  ngOnInit(){
    window.scroll(0,0);                 
  }

  getChangesFromParent(list : string[], name:string){  
    this.myName = name;      
    this.myHeadings = JSON.parse(JSON.stringify(list));    
    this.ref.detectChanges();
  }


    
}  
