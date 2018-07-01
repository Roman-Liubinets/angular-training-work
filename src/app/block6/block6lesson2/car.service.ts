export class CarsService {
    cars = [{
        name: 'Ford',
        isSold: false
      },{
        name: 'Mercedes',
        isSold: false
      },{
      name: 'Audi',
      isSold: false
      }];

      addCar(name: string) {
          this.cars.push({
              name,
              isSold: false
          })
      }
}