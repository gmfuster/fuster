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
      }            
    }, i * 80);    
  }      

  ngAfterViewInit(){
    let welcomearr = "Welcome to my personal space.";
    let scrolldownarr = "Scroll Down for Projects and Random Stuff.";
    let programmingNotesArr = "Programming Notes on the Top Nav.";

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
      }, 3000);  
    }, 3000);    
    
  }
}
