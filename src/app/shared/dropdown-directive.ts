import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;   
    @HostListener('mouseleave') mouseE(eventData:Event) { this.isOpen = false; }
    isClicked = false;   
    @HostListener('click') toggleOpen(){        
        this.isClicked = true;
        //this.isOpen = !this.isOpen;       
    }
    @HostListener('document:click') docClicked(){        
        if (this.isClicked)
        {
            this.isOpen = !this.isOpen; 
            this.isClicked = false;
        }else{
            this.isOpen = false;            
        }
        
    }
}