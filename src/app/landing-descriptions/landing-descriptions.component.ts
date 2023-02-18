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
  articlesDone:boolean = false;
  welcomearr:string = "Not for phone screens";
  scrolldownarr:string =  "Scroll down for random stuff";
  articlesArr:string  = "Articles have more detail";

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
            if (this.articles === this.articlesArr)       
            {
              this.articlesDone = true;
            }
            break; 
      }            
    }, i * 60);    
  }      

  ngAfterViewInit(){                

    for(let i = 0; i< this.welcomearr.length; i++){
      this.doSetTimeout(i, this.welcomearr, "welcome");      
    }    
    
    for(let j = 0; j< this.articlesArr.length; j++){
      this.doSetTimeout(j, this.articlesArr, "articles");               
    }    

    for(let j = 0; j< this.scrolldownarr.length; j++){
      this.doSetTimeout(j, this.scrolldownarr, "scrolldown");      
    } 
        
    /*DO NOT USE THE SETTIMEOUT FOR NOW, have them all go at the same time*/
    /*setTimeout(() => {

      for(let j = 0; j< programmingNotesArr.length; j++){
        this.doSetTimeout(j, programmingNotesArr, "programmingNotes");           
      }
      setTimeout(() => {
        for(let j = 0; j< articlesArr.length; j++){
          this.doSetTimeout(j, articlesArr, "articles");      
        } 
        
        
        setTimeout( () =>{
          for(let j = 0; j< scrolldownarr.length; j++){
            this.doSetTimeout(j, scrolldownarr, "scrolldown");      
          } 
        }, 2800);
      }, 1700);     
      }, 1700);   
        */     
  }
}
