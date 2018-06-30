import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'block5lesson2'
})
export class Block5lesson2Pipe implements PipeTransform {

  transform(value: any, arg) {
    return value * arg;
  }

}
