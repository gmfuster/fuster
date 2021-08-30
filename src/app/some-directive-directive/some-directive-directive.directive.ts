import { Directive, ElementRef, Input, OnInit, Output, Renderer2} from '@angular/core';

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

@Directive({ 
  selector: '[appSomeDirectiveDirective3]'
})

export class SomeDirectiveDirective3 implements OnInit {  
  constructor(private theElementRef3:ElementRef, private renderer:Renderer2){
  }
  ngOnInit(){            
    this.renderer.setStyle(this.theElementRef3.nativeElement, 'background-color', 'green');
  }
}
