import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BuyerGetItemsService } from '../buyer-get-items.service';
import allItems from '../__mocks__/buyerItemsMock';
import { ItemsModel } from 'src/app/shared/models/ItemsModel';
import { HttpClient } from '@angular/common/http';

fdescribe('BuyerGetItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BuyerGetItemsService],
    imports: [HttpClientTestingModule],
  }));

  describe(':', () => {
    const setup = () => {
      const http = TestBed.get(HttpClient);
      const buyerGetItemService = TestBed.get(BuyerGetItemsService);
      const httpMock = TestBed.get(HttpTestingController);
      return { buyerGetItemService, httpMock, http };
    };

    afterEach(() => {
      const { httpMock } = setup();
      httpMock.verify();
    });
    it('should be created', () => {
      const { buyerGetItemService } = setup();
      expect(buyerGetItemService).toBeTruthy();
    });

    it('should get all items', () => {
      const { buyerGetItemService, httpMock } = setup();
      buyerGetItemService.get().subscribe((item: ItemsModel) => {
        expect(JSON.parse(JSON.stringify(item))).toEqual(allItems);
      });
      const req = httpMock.expectOne(
        'https://front-shopping-cart.herokuapp.com/api/v1/buyer/items'
        );
      expect(req.request.method).toBe('GET');

      req.flush(allItems);
    });
  });
});
