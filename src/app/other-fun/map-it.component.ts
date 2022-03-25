import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./other.component.css']
})

export class MapItComponent implements OnInit{      
  mapSVGFile :string = "\\assets\\images\\Other\\worldmap.svg";  
  mapSVG: string = "\\assets\\images\\Other\\worldmap.svg";  //TODO get the SVG and put it there, different ones with the different colors.
  ngOnInit(){
    window.scroll(0,0);        
  }
}  
