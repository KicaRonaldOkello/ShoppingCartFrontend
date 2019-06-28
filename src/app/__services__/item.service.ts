import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  addItem(data): Observable<any> {

    return this.http.post('http://localhost:5000/api/v1/item/add', { item: data });
  }
}
