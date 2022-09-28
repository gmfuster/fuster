import { Directive, HostBinding, HostListener, ViewContainerRef } from "@angular/core";

//not following standards because I already was using this in the code everywhere.
@Directive({
    selector: '.HeadingSubTopic'
  })
  export class HeadingSubTopicDirective {}


  @Directive({
    selector: '[appPopupPlaceHolder]'
  })
  export class PlaceholderDirective {
    constructor(public viewContainerRef :ViewContainerRef){}
  }