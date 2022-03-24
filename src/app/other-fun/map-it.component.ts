import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./other.component.css']
})

export class MapItComponent implements OnInit{      
  mapSVG :string = "\\assets\\images\\Other\\worldmap.svg";  
  ngOnInit(){
    window.scroll(0,0);
        
    }
  }  
