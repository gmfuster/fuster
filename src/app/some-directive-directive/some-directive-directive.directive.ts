import { Directive, ElementRef, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appSomeDirectiveDirective]', 
})

export class SomeDirectiveDirective implements OnInit {
  
  constructor(private theElementRef:ElementRef){

  }
  ngOnInit(){    
    this.theElementRef.nativeElement.style.backgroundColor='lightblue';
  }
}


@Directive({ 
  selector: '[appSomeDirectiveDirective2]'
})

export class SomeDirectiveDirective2 implements OnInit {
  @Input() fontColor :string = "green";

  constructor(private theElementRef2:ElementRef){

  }
  ngOnInit(){    
    this.theElementRef2.nativeElement.style.color = this.fontColor;
  }
}
