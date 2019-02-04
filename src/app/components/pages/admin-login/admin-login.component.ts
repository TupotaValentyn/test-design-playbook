import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { DataSourceService } from '../../shared/service/data-source.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor (private dataSource: DataSourceService, private router: Router) {

  }
  //for password field
  hide = true;
  auth(login, pass) {
    this.dataSource.authorize(login, pass).subscribe((data: any) => {
      if(data.auth === 'true') {
        document.cookie = `token=${data.token}; path=/`;
        localStorage.setItem('token', data.token);
        this.router.navigate(['admin/links'])
          .catch((error) => alert(error));
      } else {
        alert('Саша, не ламай')
      }
    })
  }

}
