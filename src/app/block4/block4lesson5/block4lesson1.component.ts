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
  items = [5, 4, 3, 2, 1];
  current = 1;

  onClick(number: number) {
  this.current = number;
  }

}
