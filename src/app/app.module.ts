import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
// import { CarComponent } from './car/car.component';
// import { CarsComponent } from './cars/cars.component';
import { ValidationPageComponent } from './validation-page/validation-page.component';
import { TComponentsComponent } from './t-components/t-components.component';
import { TComponents2Component } from './t-components2/t-components2.component';
// Block 3 lesson 2
// import { AddCarComponent } from './block3lesson2/add-car/add-car.component';
// import { CarComponent } from './block3lesson2/car/car.component';
// import { CarsComponent } from './block3lesson2/cars/cars.component';
// Block 3 lesson 3
// import { AddCarComponent } from './block3lesson3/add-car/add-car.component';
// import { CarComponent } from './block3lesson3/car/car.component';
// import { CarsComponent } from './block3lesson3/cars/cars.component';
// Block 3 lesson 4
// import { AddCarComponent } from './block3lesson4/add-car/add-car.component';
// import { CarComponent } from './block3lesson4/car/car.component';  
// import { CarsComponent } from './block3lesson4/cars/cars.component';
// Block 3 lesson 5
import { AddCarComponent } from './block3lesson5/add-car/add-car.component';
import { CarComponent } from './block3lesson5/car/car.component';  
import { CarsComponent } from './block3lesson5/cars/cars.component';
// Block 4 lesson 1
// import { Block4lesson1Directive } from './block4/block4lesson1/block4lesson1.directive';
// import { Block4lesson1Component } from './block4/block4lesson1/block4lesson1.component';
// Block 4 lesson 3
import { Block4lesson1Directive } from './block4/block4lesson3/block4lesson1.directive';
import { Block4lesson1Component } from './block4/block4lesson3/block4lesson1.component';

@NgModule({
  declarations: [
    AppComponent,
    // CarComponent,
    // CarsComponent,
    ValidationPageComponent,
    TComponentsComponent,
    TComponents2Component,
    // Block 3 lesson 2
    // AddCarComponent,
    // CarComponent,
    // CarsComponent
    // Block 3 lesson 3
    // AddCarComponent,
    // CarComponent,
    // CarsComponent
    // Block 3 lesson 4
    // AddCarComponent,
    // CarComponent,
    // CarsComponent
    // Block 3 lesson 4
    AddCarComponent,
    CarComponent,
    CarsComponent,
    // Block 4 lesson 1
    // Block4lesson1Directive,
    // Block4lesson1Component
    // Block 4 lesson 2
    Block4lesson1Directive,
    Block4lesson1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
