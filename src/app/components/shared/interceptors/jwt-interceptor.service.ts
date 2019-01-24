import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorService  implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = localStorage.getItem('token');
    let authReq: HttpRequest<any>;
    if (jwtToken && jwtToken.length) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwtToken}`)
      });
    }
    if (authReq) {
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
