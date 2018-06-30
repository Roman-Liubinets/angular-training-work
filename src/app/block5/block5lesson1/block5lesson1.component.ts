import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block5lesson1',
  templateUrl: './block5lesson1.component.html',
  styleUrls: ['./block5lesson1.component.css']
})
export class Block5lesson1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = "WebForMyself";
  pi = Math.PI;
  date = new Date();
  amount = 0.45;
  object = {
    foo: "bar",
    baz: "qux",
    nested: {
      xyz: 3,
      numbers: [1, 2, 3]
    }
  };

}
