import { async, TestBed } from '@angular/core/testing';

import { GetBuyerItemsComponent } from './get-buyer-items.component';
import { BuyerGetItemsService } from 'src/app/__services__/buyer-get-items.service';
import { DomSanitizer } from '@angular/platform-browser';
import {  of } from 'rxjs';
import allItems from 'src/app/__services__/__mocks__/buyerItemsMock';


describe('GetBuyerItemsComponent', () => {
  const itemService = {
    get: () => {
      return of(allItems);

    }
  };
  beforeEach(async(() => {
    spyOn(itemService, 'get').and.returnValue(of(allItems));
    TestBed.configureTestingModule({
      declarations: [ GetBuyerItemsComponent ],
      providers: [
        { provide: BuyerGetItemsService, useValue: itemService }
      ]
    });
  }));

  describe('Name of the group', () => {
    const setup = () => {
      const fixture = TestBed.createComponent(GetBuyerItemsComponent);
      const component = fixture.componentInstance;
      const sanitizer = fixture.debugElement.injector.get(DomSanitizer);
      return { fixture, component, sanitizer };
    };

    it('should create', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should return all items', () => {
      const { component, fixture } = setup();


      component.getItems();
      fixture.detectChanges();

      expect(itemService.get).toHaveBeenCalled();
    });
  });
});
