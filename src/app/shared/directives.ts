import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '.HeadingSubTopic'
  })
  export class HeadingSubTopicDirective {}

  //because the above doesn't longer work with the new code, TODO but this for now
  //I don't know why it works on the Angular pages but not in the new ones, so using
  //this for now but need to come back to it and figure it out TODO
  @Directive({
    selector: '[HeadingSubTopicDir]'
  })
  export class HeadingSubTopicDir {}

  @Directive({
    selector: '[appPopupPlaceHolder]'
  })
  export class PlaceholderDirective {
    constructor(public viewContainerRef :ViewContainerRef){}
  }