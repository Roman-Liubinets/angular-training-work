import { CarsService } from './../car.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {

carName="";

addCar() {
  this.service.addCar(this.carName);
  this.carName="";
}

  constructor(private service: CarsService) { }

}
