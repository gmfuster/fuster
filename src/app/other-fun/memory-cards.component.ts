import { Component , OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'memory-cards',
  templateUrl: './memory-cards.component.html',
  styleUrls: ['./other.component.css']
})

export class MemoryCardsComponent implements OnInit{
  pathToImages :string = "\\assets\\images\\CarImages\\";
  backImage:string = "\\assets\\images\\clickme.svg";
  player1Score:number = 0;
  player2Score:number = 0;
  currentPlayer:number =1;

  elementsForPicsBeforeSorting :string[] = [this.pathToImages + "darthmaul.svg", this.pathToImages  + "darthvader.svg", 
  this.pathToImages + "lukepilot.svg", this.pathToImages  + "bb8.svg", this.pathToImages  + "falconnew.svg",
  this.pathToImages + "clone.svg", this.pathToImages + "pretorian.svg", this.pathToImages + "hansolo.svg", 
  this.pathToImages + "darthmaul.svg", this.pathToImages + "darthvader.svg",  this.pathToImages + "kyloren.svg", this.pathToImages + "kyloren.svg",
  this.pathToImages + "lukepilot.svg", this.pathToImages + "bb8.svg", this.pathToImages + "falconnew.svg",
  this.pathToImages + "clone.svg", this.pathToImages + "pretorian.svg", this.pathToImages + "hansolo.svg",
  this.pathToImages + "sithtrooper.svg", this.pathToImages + "sithtrooper.svg", this.pathToImages + "rebel.svg", this.pathToImages + "rebel.svg", 
  this.pathToImages + "captainphasma.svg",this.pathToImages + "captainphasma.svg"];      

  elementsForPicsAfterSorting:string[] = [];

  picturesShown :string[] = [this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage
    ,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,
    this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,
    this.backImage,this.backImage,this.backImage];
  cardOneOpen: { open:boolean, n:number} = {open:false, n:-1};
  cardTwoOpen: { open:boolean, n:number} = {open:false, n:-1};  

  constructor (private renderer: Renderer2){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);
    this.initCards();
  }

  initCards(){
    //sort the images
    this.elementsForPicsAfterSorting = this.elementsForPicsBeforeSorting.sort(function(a, b){return 0.5 - Math.random()})    
  }

  onPlayAgain(){

    this.picturesShown = [this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage
    ,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,
    this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,this.backImage,
    this.backImage,this.backImage,this.backImage]

    this.player1Score = 0;
    this.player2Score = 0;
    this.currentPlayer =1;
    this.cardOneOpen = {open:false, n:-1};
    this.cardTwoOpen = {open:false, n:-1};

    this.elementsForPicsAfterSorting = this.elementsForPicsBeforeSorting.sort(function(a, b){return 0.5 - Math.random()})
  }

  onImageClicked(n:number){    
    
    if (this.picturesShown[n] === this.backImage){      
      
      if (!this.cardOneOpen.open){       

        this.cardOneOpen = {open:true, n:n};                
        this.picturesShown[n] =this.elementsForPicsAfterSorting[n];        

      }else if (!this.cardTwoOpen.open){        
        this.cardTwoOpen = {open:true, n:n};
        this.picturesShown[n] =this.elementsForPicsAfterSorting[n];        
      }  

      //if two are up, count point if the same, or put back if not the same.
      if(this.cardOneOpen.open && this.cardTwoOpen.open){   

        if (this.picturesShown[this.cardOneOpen.n] === this.picturesShown[this.cardTwoOpen.n]){                        
          (this.currentPlayer === 1)? this.player1Score++ : this.player2Score++;                    
        }else{                   
          setTimeout( () => {   
            this.picturesShown[this.cardOneOpen.n] = this.backImage;
            this.picturesShown[this.cardTwoOpen.n] = this.backImage;            
          }, 1000);
        }

        this.cardOneOpen.open = false;
        this.cardTwoOpen.open = false;          
        (this.currentPlayer === 1)? this.currentPlayer =2 : this.currentPlayer =1;      
      }
    }     
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}
