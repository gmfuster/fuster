import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./other.component.css']
})

export class MapItComponent implements OnInit{   

  mapSVG:string = "\\assets\\images\\Other\\worldmap.svg";  
  listOfEvents: {title:string, map:string}[] = [{title:"", map:"worldmap.svg"},{title:"Iraq War 2003", map:"worldmap_iraq.svg"} ]  
  selectedEvent :string = "";
  ngOnInit(){
    window.scroll(0,0);     
    
  }

  onEventChanged(e:any){
    console.log(e.target.value)
    //todo the real code
  }
}  
