import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(token): Observable<any> {
    return this.http.post(
      'https://shopping-cart-staging.herokuapp.com/api/v1/auth/login',
      { token, role: 'buyer' }
    ).pipe(map(data => data));
  }
}
