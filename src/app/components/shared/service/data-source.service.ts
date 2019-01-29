import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor(private http: HttpClient) { }

  authorize(login, pass): Observable<Object> {
    return this.http
      .post(
      'http://localhost:8000/api/auth',
      {
        login: login,
        password: pass
      }
    )
  }

  disableLink(token) : Observable<Object> {
    return this.http
      .post(
      'http://localhost:8000/api/users/token/deactivate',
      {
        token: token
      }
    );
  }

  getAllLinks(): Observable<Object> {
    return this.http
      .get(
      'http://localhost:8000/api/users/token/all',
    );
  }

  createLinkForUser(email, name, surname, secondname): Observable<Object> {
    return this.http
      .post(
      'http://localhost:8000/api/users/token',
      {
        surname: surname,
        first_name: name,
        email: email,
        second_name: secondname
      });
  }

  sendMailWithLink(email, name, surname, secondname, link): Observable<Object> {
    return this.http
      .post(
      'http://localhost:8000/api/users/token/send',
      {
        surname: surname,
        first_name: name,
        email: email,
        second_name: secondname,
        link: link
      });
  }

  getResultForUser(token): Observable<Object> {
    return this.http
      .post('http://localhost:8000/api/results/one', {token: token});
  }

  getAllModels(): Observable<Object> {
    return this.http
      .get(
        'http://localhost:8000/api/model/all',
      )
  }

  updateResult(solvedResults): Observable<Object> {
    return this.http
      .post(
      'http://localhost:8000/api/results/update',
      { models: solvedResults }
    );
  }

  removeResult(result): void {
    console.log(result);
    console.log('Result removed');
  }

  getAllResults(): Observable<Object> {
    return this.http
      .get('http://localhost:8000/api/results/all');
  }

  saveResults(models): Observable<Object> {
    return this.http
      .post(
      'http://localhost:8000/api/results/save',
      { models: models }
    )
  }
}
