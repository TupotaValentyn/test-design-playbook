import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable()

export class ErrorInterceptorService implements HttpInterceptor{

  constructor(private snackBar: MatSnackBar) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        retry(1),
        catchError((err: HttpErrorResponse) => {
          let errorMessage = '';
          if (err.error instanceof ErrorEvent) {
            errorMessage = `Error: ${ err.error.message }`;
          } else {
            if (err.status == 0) {
              errorMessage = `No connection to the Internet or the server is shut down.`;
            }
            errorMessage += `Error: ${ err.status }\nMessage: ${ err.message }`;
          }
          this.snackBar.open(errorMessage, 'Close', {duration: 0});
          return throwError(errorMessage);
        })
      )

  }
  
}
