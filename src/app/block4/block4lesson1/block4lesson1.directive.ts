import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlock4lesson1]'
})
export class Block4lesson1Directive implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit() {
    //Block 4 lesson 1 
    // this.element.nativeElement.style.backgroundColor = "red";
    // Block 4 lesson 2
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, "background-color", "blue");
    this.renderer.addClass(nativeElement, "white-text");
  }

}
