import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-t-components',
  templateUrl: './t-components.component.html',
  styleUrls: ['./t-components.component.css']
})
export class TComponentsComponent {

  constructor() { }
  
  
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
