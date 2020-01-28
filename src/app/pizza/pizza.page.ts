import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {
  pizzas;
  constructor(public pizzaService: PizzaService, public orderService: OrderService, public route: Router) 
  { 
    this.pizzas = pizzaService.getPizzas();
  }
  decrement(pizza) {
    pizza.amount--;
    if (pizza.amount < 0) {
        pizza.amount = 0;
    }
  }
  increment(pizza) {
    pizza.amount++;
  }
  totalPrice() {
    return this.pizzas.reduce((total, pizza) => total + pizza.amount * pizza.price, 0);
  }
  ngOnInit() {
  }
  submit() {
    if(this.orderService.pizzaOrder){
      this.orderService.clearPizza();
      this.orderService.pizzaOrder = this.pizzas.filter(pizza => pizza.amount);
    }
    else{
      this.orderService.pizzaOrder = this.pizzas.filter(pizza => pizza.amount);
    }
    }
    reset(){
      if(this.orderService.pizzaOrder){
        console.log("YES!");
        this.orderService.clearPizza();
      }
        for(var pizza of this.pizzas){
          pizza.amount =0;
        }
    }
}