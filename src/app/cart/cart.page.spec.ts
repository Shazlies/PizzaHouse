import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPage } from './cart.page';
import { OrderService } from '../order.service';
import { PizzaPage } from '../pizza/pizza.page';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';
import { DrinksPage } from '../drinks/drinks.page';

describe('CartPage', () => {
  let component: CartPage;
  let component2: PizzaPage;
  let component3: DrinksPage;
  let fixture: ComponentFixture<CartPage>;
  let fixture2: ComponentFixture<PizzaPage>;
  let fixture3: ComponentFixture<DrinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPage ],
      providers: [
        {provide: OrderService, useValue: []}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
    TestBed.configureTestingModule({
      declarations: [ PizzaPage ],
      providers: [
        PizzaService,
        {provide: OrderService, useValue: []},
        {provide: Router, useValue: {}}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    TestBed.configureTestingModule({
      declarations: [ DrinksPage ],
      providers: [
        PizzaService,
        {provide: OrderService, useValue: []},
        {provide: Router, useValue: {}}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture2 = TestBed.createComponent(PizzaPage);
    component2 = fixture2.componentInstance;
    fixture2.detectChanges();
    fixture3 = TestBed.createComponent(DrinksPage);
    component3 = fixture3.componentInstance;
    fixture3.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should retrieve the total price of the pizzaOrder equal to 12.4', () => {
    component2.pizzas[0].amount = 2;
    component2.pizzas[0].price = 2;
    component2.pizzas[1].amount = 3;
    component2.pizzas[1].price = 2.8;
    component2.submit();
    component.ionViewDidEnter();
    
    expect(component.totalPrice()).toEqual(2*2 + 3*2.8);
    
  });
  

  it('should retrieve the total price of the drinksOrder equal to 12.4', () => {
    component3.drinks[0].amount = 2;
    component3.drinks[0].price = 2;
    component3.drinks[1].amount = 3;
    component3.drinks[1].price = 2.8;
    component3.submit();
    component.ionViewDidEnter();
    
    expect(component.totalPrice()).toEqual(2*2 + 3*2.8);
    
  });


  it('should retrieve the total price of the drinksOrder equal to Zero', () => {
    component3.drinks[0].amount = 0;
    component3.drinks[0].price = 2;
    component3.drinks[1].amount = 0;
    component3.drinks[1].price = 2.8;
    component3.submit();
    component.ionViewDidEnter();
    
    expect(component.totalPrice()).toEqual(0);
    
  });

  it('should retrieve the total price of the drinksOrder and pizzaOrder equal to 24.8', () => {
    component2.pizzas[0].amount = 2;
    component2.pizzas[0].price = 2;
    component2.pizzas[1].amount = 3;
    component2.pizzas[1].price = 2.8;
    component2.submit();

    component3.drinks[0].amount = 2;
    component3.drinks[0].price = 2;
    component3.drinks[1].amount = 3;
    component3.drinks[1].price = 2.8;
    component3.submit();
    component.ionViewDidEnter();
    
    expect(component.totalPrice()).toEqual((2*2 + 3*2.8)+(2*2 + 3*2.8));
    
  });

});
