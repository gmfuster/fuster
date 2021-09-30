import { Component, OnInit } from '@angular/core';
import { MathServices, OtherServices, StringServices } from '../shared/forexamples.service';
import { Injectable } from "@angular/core";

@Component({
  selector: 'csharp-articles',
  templateUrl: './csharp-articles.component.html',
  styleUrls: [], //share the css file  
})

export class CSharpArticlesComponent implements OnInit {
    
    ngOnInit(){
        window.scroll(0,0);
    }    
        
}
