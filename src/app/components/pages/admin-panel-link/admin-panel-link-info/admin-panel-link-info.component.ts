import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-panel-link-info',
  templateUrl: './admin-panel-link-info.component.html',
  styleUrls: ['./admin-panel-link-info.component.css']
})
export class AdminPanelLinkInfoComponent {

  @Input() usersDataItem: any;
  constructor(private http: HttpClient) {

  }

  disable(token: string) {
    this.http.post(
      'http://localhost:8000/api/users/token/deactivate',
      { 
        token: token
      }
      ).subscribe((data: any) => {
        console.log(data)
    })
  }
  
}
