import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  constructor() {
    console.log('Hello DrinkService Provider');
  }
  getDrinks() {
    return [
        { name: 'Strawberry Crumble', price: 4.25, amount: 0 },
        { name: 'Tropical Smoothie', price: 5.00, amount: 0 },
        { name: 'Coke', price: 3.00, amount: 0 },
        { name: 'Pink Lemonade ', price: 2.50, amount: 0 },
        { name: 'Fresh Orange Juice ', price: 2.00, amount: 0 }
    ];
  }
}