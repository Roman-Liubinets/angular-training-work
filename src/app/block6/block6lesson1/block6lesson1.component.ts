import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block6lesson1',
  templateUrl: './block6lesson1.component.html',
  styleUrls: ['./block6lesson1.component.css']
})
export class Block6lesson1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cars = [{
    name: 'Ford',
    isSold: false
  },{
    name: 'Mercedes',
    isSold: false
  },{
  name: 'Audi',
  isSold: false
  }];

  addCarToList(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    })
  }

}
