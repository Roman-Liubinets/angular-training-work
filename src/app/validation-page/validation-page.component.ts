import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validation-page',
  templateUrl: './validation-page.component.html',
  styleUrls: ['./validation-page.component.css']
})
export class ValidationPageComponent {

  constructor() { }
  answer = [{
    type: 'yes',
    text: 'Да',
  },{
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer="yes";
  defaultCountry="ua";

  submitForm(form: NgForm) {
    console.log("Submited!", form);
  }

  addRandEmail() {
    
  }
}

