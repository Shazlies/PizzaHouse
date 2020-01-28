import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';
import { Storage } from '@ionic/storage';
describe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [
    {provide: Storage, useValue: []},
  ],}));

  it('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });

  it('should retrieve drinkOrder from localStorage if local copy does not exist', () => {
    const service: OrderService = TestBed.get(OrderService);
    service.drinkOrder = 'foobar';
    service._drinkOrder = undefined;
    expect(service.drinkOrder).toBe('foobar');
});

it('should retrieve pizzaOrder from localStorage if local copy does not exist', () => {
  const service: OrderService = TestBed.get(OrderService);
  service.pizzaOrder = 'foobar';
  
  service._pizzaOrder = undefined;
  
  expect(service.pizzaOrder).toBe('foobar');
});

it('should clear drinkOrder from localStorage and return null', () => {
  const service: OrderService = TestBed.get(OrderService);
    service.drinkOrder = 'foobar';
    service._drinkOrder = undefined;
    service.clearDrink();
    expect(service.drinkOrder).toBe(null);
});

it('should clear pizzaOrder from localStorage and return null', () => {
  const service: OrderService = TestBed.get(OrderService);
  service.pizzaOrder = 'foobar';
  
  service._pizzaOrder = undefined;
  service.clearPizza();
  expect(service.pizzaOrder).toBe(null);
});

});
