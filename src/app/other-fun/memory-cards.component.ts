import { Component , OnInit} from '@angular/core';

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

  elementsForPicsBeforeSorting :string[] = [this.pathToImages + "darthmaul.svg", this.pathToImages  + "darthvader.svg", 
  this.pathToImages + "lukepilot.svg", this.pathToImages  + "bb8.svg", this.pathToImages  + "falconnew.svg",
  this.pathToImages + "clone.svg", this.pathToImages + "pretorian.svg", this.pathToImages + "hansolo.svg", 
  this.pathToImages + "darthmaul.svg", this.pathToImages + "darthvader.svg",  this.pathToImages + "kyloren.svg", this.pathToImages + "kyloren.svg",
  this.pathToImages + "lukepilot.svg", this.pathToImages + "bb8.svg", this.pathToImages + "falconnew.svg",
  this.pathToImages + "clone.svg", this.pathToImages + "pretorian.svg", this.pathToImages + "hansolo.svg",
  this.pathToImages + "sithtrooper.svg", this.pathToImages + "sithtrooper.svg", this.pathToImages + "rebel.svg", this.pathToImages + "rebel.svg", 
  this.pathToImages + "captainphasma.svg",this.pathToImages + "captainphasma.svg"];    

  elementsForPicsAfterSorting:string[] = [];
  ngOnInit(){
    window.scroll(0,0);
    this.initCards();
  }

  initCards(){
    //sort the images
    this.elementsForPicsAfterSorting = this.elementsForPicsBeforeSorting.sort(function(a, b){return 0.5 - Math.random()})
    
  }
  onPlayAgain(){

  }
  onImageClicked(n:number){

  }

}
