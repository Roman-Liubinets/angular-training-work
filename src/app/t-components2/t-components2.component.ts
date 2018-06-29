import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-t-components2',
  templateUrl: './t-components2.component.html',
  styleUrls: ['./t-components2.component.css']
})
export class TComponents2Component {

  constructor() { }

@Input('carItem') car: {name: string, year: number};

}
