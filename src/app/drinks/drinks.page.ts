import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../drinks.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
  drinks;
  constructor(public drinksService: DrinksService, public orderService: OrderService, public route: Router) 
  { 
    this.drinks = drinksService.getDrinks();
  }
  ngOnInit(){ 
  }
  decrement(drink) {
    drink.amount--;
    if (drink.amount < 0) {
        drink.amount = 0;
    }
  }
  increment(drink) {
    drink.amount++;
  }
  totalPrice() {
    return this.drinks.reduce((total, drink) => total + drink.amount * drink.price, 0);
  }
  submit() {
    if(this.orderService.drinkOrder){
      this.orderService.clearDrink();
      this.orderService.drinkOrder = this.drinks.filter(drink => drink.amount);
    }
    else{
      this.orderService.drinkOrder = this.drinks.filter(drink => drink.amount); 
    }
    }
    reset(){
      if(this.orderService.drinkOrder){
        this.orderService.clearDrink();
      }
        for(var drink of this.drinks){
          drink.amount =0;
        } 
    }
}