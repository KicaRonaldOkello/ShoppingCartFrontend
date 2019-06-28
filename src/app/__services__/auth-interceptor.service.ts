import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const data = JSON.parse(localStorage.getItem('userData'));

    if (data) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', data.jwtToken)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
