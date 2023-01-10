import { Component } from '@angular/core';

@Component({
  selector: 'landing-descriptions',
  templateUrl: './landing-descriptions.component.html',
  styleUrls: ['./landing-descriptions.component.css']
})
export class LandingDescriptionsComponent {
  scrolldown:string="";
  welcome:string="";
  programmingNotes:string="";
  articles:string="";


  doSetTimeout(i:number, s:string, option:string) {
    setTimeout(() => {   
      switch(option){
        case "welcome":
          this.welcome += s[i];
          break; 
        case "programmingNotes":
          this.programmingNotes += s[i];
          break; 
        case "scrolldown":
          this.scrolldown += s[i];
          break; 
        case "articles":
            this.articles += s[i];
            break; 
      }            
    }, i * 60);    
  }      

  ngAfterViewInit(){
    let welcomearr = "Welcome! (not for phone screens)";
    let scrolldownarr = "Scroll down for random stuff.";
    let programmingNotesArr = "Notes on Top Nav.";
    let articlesArr = "Articles have more detail.";

    for(let i = 0; i< welcomearr.length; i++){
      this.doSetTimeout(i, welcomearr, "welcome");      
    }
    /*
    for(let j = 0; j< programmingNotesArr.length; j++){
      this.doSetTimeout(j, programmingNotesArr, "programmingNotes");           
    }

    for(let j = 0; j< scrolldownarr.length; j++){
      this.doSetTimeout(j, scrolldownarr, "scrolldown");      
    } */  
    
    setTimeout(() => {

      for(let j = 0; j< programmingNotesArr.length; j++){
        this.doSetTimeout(j, programmingNotesArr, "programmingNotes");           
      }
      setTimeout(() => {
        for(let j = 0; j< scrolldownarr.length; j++){
          this.doSetTimeout(j, scrolldownarr, "scrolldown");      
        }     
        setTimeout( () =>{
          for(let j = 0; j< articlesArr.length; j++){
            this.doSetTimeout(j, articlesArr, "articles");      
          } 
        }, 2800);
      }, 1700);     
      }, 1700);                
  }
}
