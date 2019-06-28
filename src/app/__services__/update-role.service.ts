import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateRoleService {

  constructor(private http: HttpClient) { }

  updateRole(role): Observable<any> {
    return this.http.put(
      'https://shopping-cart-staging.herokuapp.com/api/v1/auth/user/',
      role
    ).pipe(map(data => data));
  }
}
