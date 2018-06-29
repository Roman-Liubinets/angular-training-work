import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: '../add-car/add-car.component.html',
  styleUrls: ['../add-car/add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onAddCar = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carInputYear') carInputYear: ElementRef;

  addCar(carNameEl: HTMLInputElement) {
    this.onAddCar.emit({
      year: +this.carInputYear.nativeElement.value
    });
    console.log("Added!");
  }

}
