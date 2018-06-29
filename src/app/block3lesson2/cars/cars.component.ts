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

  carName="";
  carYear=2017;

cars = [{
  name: "Ford",
  year: 2011
},{
  name: "Merceds",
  year: 2012
}]; 


  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    console.log("Added!", this.cars);
  }

}


  
