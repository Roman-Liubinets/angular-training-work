import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlock4lesson1]'
})
export class Block4lesson1Directive implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "red";
  }

}
