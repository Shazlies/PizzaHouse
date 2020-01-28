import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  pizzaOrders;
  numberOfPizzas;
  drinkOrders;
  numberOfDrinks;
  totalPizza =0;
  totalDrink =0;
  constructor(public orderService: OrderService ) {
  }
  ionViewDidEnter(){
    if (this.orderService.pizzaOrder) {
      this.pizzaOrders = this.orderService.pizzaOrder;
      this.numberOfPizzas = this.pizzaOrders.reduce((numberOfPizzas, pizza) => numberOfPizzas + pizza.amount, 0);
    }
    else{
      this.pizzaOrders=null;
    }
    if (this.orderService.drinkOrder) {
      this.drinkOrders = this.orderService.drinkOrder;
      this.numberOfDrinks = this.drinkOrders.reduce((numberOfDrinks, drink) => numberOfDrinks + drink.amount, 0);
    }
    else{
      this.drinkOrders=null;
    }
  }
  ngOnInit() { 
  }
  totalPrice() {
    if (this.orderService.pizzaOrder) {
      this.totalPizza = this.pizzaOrders.reduce((total, pizza) => total + pizza.amount * pizza.price, 0);
    }
    if(this.orderService.drinkOrder){
      this.totalDrink =this.drinkOrders.reduce((total, drink) => total + drink.amount * drink.price, 0);
    }
    if(!this.orderService.pizzaOrder&&!this.orderService.drinkOrder){
      return 0
    }
    return this.totalDrink+this.totalPizza; 
  }
}