import { TestBed } from '@angular/core/testing';

import { PizzaService } from './pizza.service';

describe('PizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaService = TestBed.get(PizzaService);
    expect(service).toBeTruthy();
  });

  it('should return the drinks list', () => {
    const service: PizzaService = TestBed.get(PizzaService);
    const pizzasList = [
      { name: 'Margherita', price: 15.50, amount: 0 },
      { name: 'Neapolitan', price: 20.00, amount: 0 },
      { name: 'Pepperoni', price: 25.00, amount: 0 },
      { name: 'Sausage', price: 18.00, amount: 0 },
      { name: 'Big Cheese', price: 16.00, amount: 0 },
  ];
  expect(service.getPizzas()).toEqual(pizzasList);
    
  });
});
