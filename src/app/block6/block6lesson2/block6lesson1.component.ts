import { Component, OnInit } from '@angular/core';
import { CarsService } from './car.service';

@Component({
  selector: 'app-block6lesson1',
  templateUrl: './block6lesson1.component.html',
  styleUrls: ['./block6lesson1.component.css']
})
export class Block6lesson1Component implements OnInit {

  constructor(private service: CarsService) { }

cars=[];

  ngOnInit() {
    this.cars = this.service.cars;
  }


  addCarToList(carName: string) {
    this.service.addCar(carName);
  }

}
