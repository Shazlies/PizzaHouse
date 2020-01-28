import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public localStorage:  Storage) {
    
    console.log('Hello OrderServiceProvider Provider');
  }
  _pizzaOrder;
  _drinkOrder;

  get pizzaOrder() {
    if (!this._pizzaOrder && this.localStorage['pizzaOrder']) {
      console.log("HEY");
        this._pizzaOrder = JSON.parse(this.localStorage['pizzaOrder']);
    }
    return this._pizzaOrder;
}

set pizzaOrder(value) {
    this._pizzaOrder = value;
    this.localStorage['pizzaOrder'] = JSON.stringify(value);
}

clearPizza() {
    this.pizzaOrder = null;
}


get drinkOrder() {
  if (!this._drinkOrder && this.localStorage['drinkOrder']) {
      this._drinkOrder = JSON.parse(this.localStorage['drinkOrder'])
  }
  return this._drinkOrder;
}

set drinkOrder(value) {
  this._drinkOrder = value;
  this.localStorage['drinkOrder'] = JSON.stringify(value);
}

clearDrink() {
  this.drinkOrder = null;
}
}
