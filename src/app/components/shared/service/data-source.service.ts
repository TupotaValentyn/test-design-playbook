import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SolvedModel } from '../models/solved-model'

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor(private http: HttpClient) { }

  deleteResult(token: string): Observable<object> {
    return this.http
      .post(
        environment.API_DOMAIN + '/api/results/delete',
        {
          token: token
        }
      )
  }

  authorize(login: string, pass: string): Observable<Object> {
    return this.http
      .post(
      environment.API_DOMAIN + '/api/auth',
      {
        login: login,
        password: pass
      }
    );
  }

  disableLink(token: string): Observable<Object> {
    return this.http
      .post(
      environment.API_DOMAIN + '/api/users/token/deactivate',
      {
        token: token
      }
    );
  }

  getAllLinks(): Observable<Object> {
    return this.http
      .get(
      environment.API_DOMAIN + '/api/users/token/all',
    );
  }

  createLinkForUser(email: string, name: string, surname: string, secondname: string): Observable<Object> {
    return this.http
      .post(
      environment.API_DOMAIN + '/api/users/token',
      {
        surname: surname,
        first_name: name,
        email: email,
        second_name: secondname
      });
  }

  sendMailWithLink(email: string, name: string, surname: string, secondname: string, link: string): Observable<Object> {
    return this.http
      .post(
      environment.API_DOMAIN + '/api/users/token/send',
      {
        surname: surname,
        first_name: name,
        email: email,
        second_name: secondname,
        link: link
      });
  }

  getResultForUser(token: string): Observable<Object> {
    return this.http
      .post(environment.API_DOMAIN + '/api/results/one', {token: token});
  }

  getAllModels(): Observable<Object> {
    return this.http
      .get(
        environment.API_DOMAIN + '/api/model/all',
      );
  }

  getAllModelsNew(): Observable<Object> {
    return this.http
      .get(environment.API_DOMAIN + '/api/models/all')
  }

  getSolvedModel(): Observable<Object> {
    return this.http
      .get(environment.API_DOMAIN + '/api/models/solved')
  }

  updateResult(solvedResults: Array<SolvedModel>): Observable<Object> {
    return this.http
      .post(
      environment.API_DOMAIN + '/api/results/update',
      { models: solvedResults }
    );
  }

  removeResult(token: string): Observable<Object> {
    console.log(token);
    console.log('Result removed');
    return this.http
      .post(
        environment.API_DOMAIN + '/api/results/delete',
        {token: token}
      );
  }

  getAllResults(): Observable<Object> {
    return this.http
      .get(environment.API_DOMAIN + '/api/results/all');
  }

  saveResults(models: Array<SolvedModel>): Observable<Object> {
    return this.http
      .post(
      environment.API_DOMAIN + '/api/results/save',
      { models: models }
    );
  }

  getApplicantInfo(token: string): Observable<Object> {
    return this.http
      .post(environment.API_DOMAIN + '/api/users/info', {token: token});
  }

  updateCommentAboutUser(token: string, comment): Observable<Object> {
    return this.http
      .post(
      environment.API_DOMAIN + '/api/users/update',
      {
        token: token,
        comment: comment
      });
  }

  changePassword(oldPassword: string, newPassword: string): Observable<Object> {
    return this.http
      .post(environment.API_DOMAIN + '/api/change/password', { password: oldPassword, newPassword: newPassword });
  }

  changeEmail(newEmail: string): Observable<Object> {
    return this.http
      .post(environment.API_DOMAIN + '/api/change/email', { email: newEmail });
  }

  getEmployerInfo(): Observable<Object> {
    return this.http
      .get(environment.API_DOMAIN + '/api/employers/info');
  }
  
  getAllArchiveResults():Observable<Object> {
    return this.http
      .get(environment.API_DOMAIN + '/api/results/archived')
  }

  updateArchiveData (token: string) {
    return this.http.post(environment.API_DOMAIN + '/api/results/undelete', {
      token: token
    })
  }

  setNotification(notify: boolean): Observable<Object> {
    return this.http.post(environment.API_DOMAIN + '/api/change/notify', { notify: notify });
  }

  getTotalAmount(): Observable<Object> {
    return this.http.get(environment.API_DOMAIN + '/api/models/count');
  }

}
