import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: '../cars/cars.component.html',
  styleUrls: ['../cars/cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

cars = [{
  name: "Ford",
  year: 2011
},{
  name: "Merceds",
  year: 2012
}]; 

updateCarList(car: {name: string, year: number}) {
  this.cars.push(car);
}

}


  
