import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  private static authorizationHeader;

  public static getAuthorizationHeader() {
    return this.authorizationHeader;
  }

  ngOnInit() {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxlc2V5a29AZ21haWwuY29tIiwiYWNjZXNzIjoidXNlciIsImlhdCI6MTU0ODIzNjgzNSwiZXhwIjoxNTQ4MzIzMjM1fQ.2dGDRptmOUO-LLcI_9TR8Nt9cV9Cl2No92dhZ3ZQfwo');
    AppComponent.authorizationHeader = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

}
