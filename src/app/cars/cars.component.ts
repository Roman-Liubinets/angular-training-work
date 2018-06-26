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
  setTimeout(() => {
    this.canAddCar=true;
  }, 4000)
}*/
inputFormtext="";
addCarstatus="";

name;
constructor() {
  
}
addCar() {
this.addCarstatus = "Машина добавлена";
}

/*onKeyUp(event: Event) {
  this.inputFormtext= (<HTMLInputElement>event.target).value;
}*/

/*onKeyUp(value) {
  this.inputFormtext=value;
}*/

onKeyUp(event) {
  this.inputFormtext= event.target.value;
}




}
