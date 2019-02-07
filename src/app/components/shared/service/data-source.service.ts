import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor(private http: HttpClient) { }

  deleteResult(token): Observable<object> {
    return this.http
      .post(
        'http://localhost:8000/api/results/delete',
        {
          token: token
        }
      )
  }

  authorize(login, pass): Observable<Object> {
    return this.http
      .post(
      'http://localhost:8000/api/auth',
      {
        login: login,
        password: pass
      }
    );
  }

  disableLink(token): Observable<Object> {
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
      );
  }

  getAllModelsNew(): Observable<Object> {
    return this.http
      .get('http://localhost:8000/api/models/all')
  }

  getSolvedModel(): Observable<Object> {
    return this.http
      .get('http://localhost:8000/api/models/solved')
  }

  updateResult(solvedResults): Observable<Object> {
    return this.http
      .post(
      'http://localhost:8000/api/results/update',
      { models: solvedResults }
    );
  }

  removeResult(token): Observable<Object> {
    console.log(token);
    console.log('Result removed');
    return this.http
      .post(
        'http://localhost:8000/api/results/delete',
        {token: token}
      );
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
    );
  }

  getApplicantInfo(token): Observable<Object> {
    return this.http
      .post('http://localhost:8000/api/users/info', {token: token});
  }

  updateCommentAboutUser(token, comment): Observable<Object> {
    return this.http
      .post(
      'http://localhost:8000/api/users/update',
      {
        token: token,
        comment: comment
      });
  }

  changePassword(oldPassword: string, newPassword: string): Observable<Object> {
    return this.http
      .post('http://localhost:8000/api/change/password', {password: oldPassword, newPassword: newPassword});
  }
  
  getAllArchiveResults():Observable<Object> {
    return this.http
      .get('http://localhost:8000/api/results/archived')
  }

  updateArchiveData (token:string) {
    return this.http.post('http://localhost:8000/api/results/archived', {
      token: token
    })
  }
}
