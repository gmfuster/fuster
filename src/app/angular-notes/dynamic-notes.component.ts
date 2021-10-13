import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dynamic-notes',
  templateUrl: './dynamic-notes.component.html',
  styleUrls: ['./angular-notes.component.css'],  
})

export class DynamicNotesComponent implements OnInit {
    id:number = 0;
    constructor(private route:ActivatedRoute){

    }
    ngOnInit(){        
        this.id = Number(this.route.snapshot.params['id']);        
    }
}