import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemsModel } from '../shared/models/ItemsModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuyerGetItemsService {

  constructor(private http: HttpClient) { }

  get(): Observable<ItemsModel> {
    return this.http.get(
      'https://front-shopping-cart.herokuapp.com/api/v1/buyer/items'
      ).pipe(map(data => new ItemsModel().deserialize(data)));
  }
}
