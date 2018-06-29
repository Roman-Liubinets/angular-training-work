import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { ValidationPageComponent } from './validation-page/validation-page.component';
import { TComponentsComponent } from './t-components/t-components.component';
import { TComponents2Component } from './t-components2/t-components2.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    ValidationPageComponent,
    TComponentsComponent,
    TComponents2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
