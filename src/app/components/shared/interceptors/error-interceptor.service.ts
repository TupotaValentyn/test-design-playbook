import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()

export class ErrorInterceptorService implements HttpInterceptor{

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        retry(1),
        catchError((err: HttpErrorResponse) => {
          let errorMessage = ''
          if (err.error instanceof ErrorEvent) {
            errorMessage = `Error: ${ err.error.message }`;
          } else {
            errorMessage = `Error: ${ err.status }\nMessage: ${ err.message }`;
          }
          alert(errorMessage);
          return throwError(errorMessage);
        })
      )

  }
  
}
