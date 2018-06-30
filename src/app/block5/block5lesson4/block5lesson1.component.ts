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
  
  searchCar="";

  cars = [{
    name: "Ford",
    decr: "WFM 1"
  },{
    name: "mercedes",
    decr: "WFM 2"
  },{
    name: "audi",
    decr: "WFM 3"
  },{
    name: "BMW",
    decr: "WFM 4"
  }];

  addCar() {
    this.cars.push({
      name: "new Car",
      decr: "WFM"
    })
  }

}
