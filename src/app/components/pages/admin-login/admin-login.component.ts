import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor (private http: HttpClient, private router: Router) {

  }
  //for password field
  hide = true;
  auth(login, pass) {
    this.http.post(
      'http://localhost:8000/api/auth',
      { 
        login: login, 
        password: pass
      }
      ).subscribe((data: any) => {
      if(data.auth === 'true') {
        localStorage.setItem('token', data.token);
        this.router.navigate(['admin/links'])
      } else {
        alert('Саша, не ламай')
      }
    })
  }

}
