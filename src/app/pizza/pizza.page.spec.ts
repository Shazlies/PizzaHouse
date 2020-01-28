import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPage } from './pizza.page';
import { Router } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { OrderService } from '../order.service';

describe('PizzaPage', () => {
  let component: PizzaPage;
  let fixture: ComponentFixture<PizzaPage>;
  let pizza = PizzaService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPage ],
      providers: [
        PizzaService,
        {provide: OrderService, useValue: {}},
        {provide: Router, useValue: {}}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the pizza amount on increment', () => {
    const margherita = { name: 'Margherita', amount: 0 };
    component.increment(margherita);
    expect(margherita.amount).toEqual(1);
  });

  it('should decrement the drink amount on decrement', () => {
    const margherita = { name: 'Margherita', amount: 5 };
    component.decrement(margherita)
    expect(margherita.amount).toEqual(4);
  });

  it('should not go below 0 on decrement', () => {
    const margherita = { name: 'Margherita', amount: 0 };
    component.decrement(margherita)
    expect(margherita.amount).toEqual(0);
  });

  it('should retrieve the total price', () => {
    component.pizzas[0].amount = 2;
    component.pizzas[0].price = 2;
    component.pizzas[1].amount = 3;
    component.pizzas[1].price = 2.8;
    expect(component.totalPrice()).toEqual(2 * 2 + 3 * 2.8);
  });

  it('should reset the total price to zero', () => {
    component.pizzas[0].amount = 2;
    component.pizzas[0].price = 2;
    component.pizzas[1].amount = 3;
    component.pizzas[1].price = 2.8;
    component.reset();
    expect(component.totalPrice()).toEqual(0);
  });

});
