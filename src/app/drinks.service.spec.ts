import { TestBed } from '@angular/core/testing';

import { DrinksService } from './drinks.service';

describe('DrinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinksService = TestBed.get(DrinksService);
    expect(service).toBeTruthy();
  });

  it('should return the drinks list', () => {
    const service: DrinksService = TestBed.get(DrinksService);
    const drinksList = [
      { name: 'Strawberry Crumble', price: 4.25, amount: 0 },
      { name: 'Tropical Smoothie', price: 5.00, amount: 0 },
      { name: 'Coke', price: 3.00, amount: 0 },
      { name: 'Pink Lemonade ', price: 2.50, amount: 0 },
      { name: 'Fresh Orange Juice ', price: 2.00, amount: 0 }
  ];
  expect(service.getDrinks()).toEqual(drinksList);
    
  });
});
