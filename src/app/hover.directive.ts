import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective implements OnInit {
  constructor( private element: ElementRef,private renderer:Renderer2) {
    console.log(this.element);
   }
   ngOnInit()
   {
    // this.element.nativeElement.style.backgroundColor='red';
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red');
   }
   @HostListener('mouseenter')onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white');
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red');
   }
}
