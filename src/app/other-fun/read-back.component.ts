import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'read-back',
  templateUrl: './read-back.component.html',
  styleUrls: ['./other.component.css']
})

export class ReadBackComponent implements OnInit{
  url: string = "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";
  titlesDescArray: {title:string, desc:string}[] = [];
  option:string = "backwards";
  

  ngOnInit(){
    this.getRssFeed();    
  }

  async getRssFeed(){         
    let url = this.url;         
    let response = await fetch(url);      
    let xmlText = "";   
    var xmlDoc = new Document();  
                
    xmlText = await response.text();      
    var parser = new DOMParser();
    xmlDoc = parser.parseFromString(xmlText, "text/xml");                 
    
    //let arrayOfNews = [];            
    for (var i=0; i< 20; i++){    
      let obj = {title:"", desc:""};    
      try{
        obj.title = (xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue)??"";
        obj.desc = xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue??"";          
      }catch{          
        obj.title = "";
        obj.desc = "";
      }
      this.titlesDescArray.push(obj);
    }            
    //this.titlesDescArray = arrayOfNews;
  }

}
