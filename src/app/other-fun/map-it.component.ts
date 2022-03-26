import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./other.component.css']
})

export class MapItComponent implements OnInit{   

  mapSVGPath:string = "\\assets\\images\\Other\\";  
  mapSVG: string = this.mapSVGPath +"worldmap.svg"
  listOfEvents: {title:string, map:string}[] = [{title:"", map:"worldmap.svg"},
    {title:"Iraq War 2003", map:"worldmap_iraq.svg"},
    {title:"Afghanistan War 2001", map:"worldmap_afghanistan.svg"} ]  
  selectedEvent :string = "";
  ngOnInit(){
    window.scroll(0,0);     
    
  }

  onEventChanged(e:any){    
    this.mapSVG = this.mapSVGPath + e.target.value;
  }
}  
