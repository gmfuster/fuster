import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./other.component.css']
})

export class MapItComponent implements OnInit{   

  mapSVGPath:string = "\\assets\\images\\Other\\";  
  mapSVG: string = this.mapSVGPath +"worldmap.svg";  
  listOfEvents: {title:string, map:string, add:string,}[] = [
    {title:"", map:"worldmap.svg",add:""},
    {title:"Participation Iraq War 2003", map:"worldmap_iraq.svg", add:""},
    {title:"Participation Afghanistan War 2001", map:"worldmap_afghanistan.svg",add:""},
    {title:"Top 10 polluters per capita 2021", map:"worldmap_top_polluters_21.svg",add:""},
    /*{title:"Bombed by US 1991-2021", map:"worldmap_bomb_us.svg",add:"I tried to find the data on Russia, China but not much on it"}] -- add back when available for other too*/
  ]
  selectedEvent :string = "";
  ngOnInit(){
    window.scroll(0,0);     
    
  }

  onEventChanged(e:any){    
    this.mapSVG = this.mapSVGPath + e.target.value;    
  }
}  
