import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {


  constructor() {
    console.log('Hello PizzaService Provider');
  }

  getPizzas() {
    return [
        { name: 'Margherita', price: 15.50, amount: 0 },
        { name: 'Neapolitan', price: 20.00, amount: 0 },
        { name: 'Pepperoni', price: 25.00, amount: 0 },
        { name: 'Sausage', price: 18.00, amount: 0 },
        { name: 'Big Cheese', price: 16.00, amount: 0 },
    ];
}

}
