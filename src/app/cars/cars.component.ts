import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
/*
Перший приклад
canAddCar=false;
constructor() {
  setTimeout(() git remote add origit remote add origin https://github.com/Roman-Liubinets/angular-training-work.gitgin https://github.com/Roman-Liubinets/angular-training-work.git=> {
    this.canAddCar=true;
  }, 4000)
}*/
inputFormtext="";
addCarstatus="";

name;
constructor() {
  
}
// addCar() {
// this.addCarstatus = "Машина добавлена";
// addCar() {
// this.addCarstatus = "Машина добавлена";
// }}

/*onKeyUp(event: Event) {
  this.inputFormtext= (<HTMLInputElement>event.target).value;
}*/

/*onKeyUp(value) {
  this.inputFormtext=value;
}*/

// onKeyUp(event) {
//   this.inputFormtext= event.target.value;
// }
// // Блок 2 урок 7
// carName="";
// addCarStatus= false;

// addCar() {
//   this.addCarStatus=true;
//   }// addCarStatus= false;

// addCar() {
//   this.addCarStatus=true;
//   }
  // Блок 2 урок 8
  //  carName="";
  //  addCarStatus=false;

  //   cars=["Ford", "Audi", "BMW"];
  //   items=[{
  //     id: 1,
  //     name: "item1"
  //   },{
  //     id: 2,
  //     name: "item2"
  //   },{
  //     id: 3,
  //     name: "item3"
  //   }]

  //   addCar() {
  //     this.addCarStatus=true;
  //     this.cars.push(this.carName);
  //     this.carName = '';
  //     }

// Блок 2 урок 9
//  cars=["Ford", "Audi", "BMW", "Mercedes", "Lada"];

//  setBigCarText(car: string) {
//  return car.length > 4 ? true:false;
//  }
}
