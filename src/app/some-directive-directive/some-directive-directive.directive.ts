import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Output, Renderer2, ViewContainerRef, TemplateRef} from '@angular/core';

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
  @Input() fontColor :string = 'green';

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


@Directive({ 
  selector: '[appSomeDirectiveDirective4]'
})

export class SomeDirectiveDirective4 implements OnInit {  
  @HostBinding('style.backgroundColor') backColor :string = 'transparent';
  
  ngOnInit(){                
    this.backColor = 'lightblue';
  }
}

@Directive({ 
  selector: '[appSomeDirectiveDirective5]'
})

export class SomeDirectiveDirective5 implements OnInit {  
  @HostBinding('style.backgroundColor') backColor :string = 'transparent';
  
  ngOnInit(){                    
  }

  @HostListener('mouseenter') mouseE(eventData:Event){
    this.backColor = 'lightblue';
  }
  @HostListener('mouseleave') mouseL(eventData:Event){
    this.backColor = 'lightpink';
  }
}



@Directive({ 
  selector: '[appSomeDirectiveDirectiveSTR]'
})

export class appSomeDirectiveDirectiveSTR  {  
 
  constructor(private templateRef:TemplateRef<any>, private vcRef: ViewContainerRef){}

  @Input() set appSomeDirectiveDirectiveSTR(number:Number){

    this.vcRef.clear();    
    for (var i = 1 ; i <= number; i++){
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }  
  
}
