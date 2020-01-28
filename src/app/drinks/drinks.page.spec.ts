import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksPage } from './drinks.page';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { DrinksService } from '../drinks.service';

describe('DrinksPage', () => {
  let component: DrinksPage;
  let fixture: ComponentFixture<DrinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksPage ],
      providers: [
        DrinksService,
        {provide: OrderService, useValue: {}},
        {provide: Router, useValue: {}}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should increment the drink amount on increment', () => {
    const Coke = { name: 'Coke', amount: 0 };
    component.increment(Coke);
    expect(Coke.amount).toEqual(1);
  });

  it('should decrement the drink amount on decrement', () => {
    const Coke = { name: 'Coke', amount: 5 };
    component.decrement(Coke)
    expect(Coke.amount).toEqual(4);
  });

  it('should not go below 0 on decrement', () => {
    const Coke = { name: 'Coke', amount: 0 };
    component.decrement(Coke)
    expect(Coke.amount).toEqual(0);
  });

  it('should retrieve the total price', () => {
    component.drinks[0].amount = 2;
    component.drinks[0].price = 2;
    component.drinks[1].amount = 3;
    component.drinks[1].price = 5.8;
    expect(component.totalPrice()).toEqual(2 * 2 + 3 * 5.8);
  });

  it('should reset the total price to zero', () => {
    component.drinks[0].amount = 2;
    component.drinks[0].price = 2;
    component.drinks[1].amount = 3;
    component.drinks[1].price = 5.8;
    component.reset();
    expect(component.totalPrice()).toEqual(0);
  });

});
