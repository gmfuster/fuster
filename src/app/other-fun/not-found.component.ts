import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./other.component.css']
})

export class NotFoundComponent implements OnInit{   
  errorMessage:string ="";

  constructor(private route:ActivatedRoute){}
 
  ngOnInit(){
    window.scroll(0,0);     
    this.errorMessage = this.route.snapshot.data['message'];

    //or use this if the data may change while we are here.
    //this.route.data.subscribe(
    // (data:Data) => this.errorMessage = data['message']);
  }
 
}  
