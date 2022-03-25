import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./other.component.css']
})

export class MapItComponent implements OnInit{      
  //mapSVGFile :string = "\\assets\\images\\Other\\worldmap_iraq.svg";  
  mapSVG:string = "\\assets\\images\\Other\\worldmap_iraq.svg";  
  ngOnInit(){
    window.scroll(0,0);     
    /*
    fetch(this.mapSVGFile).then(response => response.text())
      .then(data => {  	  
  	    this.mapSVG = data;
    });   */
  }
}  
