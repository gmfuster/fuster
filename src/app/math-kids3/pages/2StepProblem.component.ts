import { Component,  OnInit, OnDestroy, Renderer2 , ElementRef, ViewChild} from '@angular/core';
import { CommonFuncs } from '../../shared/commonFuncs.service';

@Component({
  selector: 'TwoStepProblem',
  templateUrl: './2StepProblem.component.html',
  styleUrls: ['../../math-kids/math-kids.component.css'],
  providers:[CommonFuncs]
})

export class TwoStepProblemComponent implements OnInit, OnDestroy  {

  containers: string[] = ["boxes", "pools", "hats", "bags", "sharks", "cars", "houses", "baskets", "paintings", "tables"];
  containersSing: string[] = ["box", "pool", "hat", "bag", "shark", "car", "house", "basket", "painting", "table"];
  smallitems: string[] = ["stones", "pins", "teeth", "goldfish", "pens", "figurines", "coins", "buttons", "pencils", "erasers"];
  containersNumber: number = 0;
  SmallItemsNumber: number = 0;
  startWithContainer: boolean | null = null;
  doPlus: boolean | null = null;
  text:string = "";
  constructor (private renderer: Renderer2, private commonFuncs:CommonFuncs){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);  
  
  }  

  onGetProblemClick(){
    this.startWithContainer = (this.commonFuncs.getRandom0ToN(2) == 1); //to get 0 or 1
    this.doPlus = (this.commonFuncs.getRandom0ToN(1) == 1);

    this.containersNumber = this.commonFuncs.getRandom1ToN(10);
    this.SmallItemsNumber = this.containersNumber * this.commonFuncs.getRandom1ToN(4);  

    var index1 = this.commonFuncs.getRandom0ToN(9);
    var index2 = this.commonFuncs.getRandom0ToN(9);

    if (this.startWithContainer){
                
      this.text = "We have " + this.containersNumber + " " + this.containers[index1] + " and each one has " + this.SmallItemsNumber + " " + this.smallitems[index2] + " in them. " ;
      if (this.doPlus)
      {
        this.text += "Somebody gives us " + (this.SmallItemsNumber + 3) + " more.  How many " + this.smallitems[index2] + "do we have now?";
      }
      else{
        this.text +=  "We give a friend " + (this.SmallItemsNumber - 1) + " . How many " + this.smallitems[index2] + " do we have now?";
      }
      
    }else{
      this.text = "We have " + this.SmallItemsNumber + " "  + this.smallitems[index2] + " but we need to split them in " + this.containersNumber + " " + this.containers[index1] + " .";      
      this.text += " Somebody gives us " + (this.SmallItemsNumber - 2) +  " more to put in that one " + this.containersSing[index1] + " .How many " + this.smallitems[index2] + " do we have now in the " + this.containersSing[index1] + "?";      
    }
  }

  reset(){
  
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}