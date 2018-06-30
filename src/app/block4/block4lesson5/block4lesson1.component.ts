import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block4lesson1',
  templateUrl: './block4lesson1.component.html',
  styleUrls: ['./block4lesson1.component.css']
})
export class Block4lesson1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headerText = "Директивы"
  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(number: number) {
  this.current = number;
  }

}
