import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./other.component.css']
})

export class MapItComponent implements OnInit{   

  mapSVGPath:string = "\\assets\\images\\Other\\";  
  mapSVG: string = "worldmap.svg"
  listOfEvents: {title:string, map:string}[] = [{title:"", map:"worldmap.svg"},{title:"Iraq War 2003", map:"worldmap_iraq.svg"} ]  
  selectedEvent :string = "";
  ngOnInit(){
    window.scroll(0,0);     
    
  }

  onEventChanged(e:any){    
    this.mapSVG = this.mapSVGPath + e.target.value;
  }
}  
