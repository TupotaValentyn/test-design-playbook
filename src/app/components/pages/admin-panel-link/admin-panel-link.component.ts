import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-panel-link',
  templateUrl: './admin-panel-link.component.html',
  styleUrls: ['./admin-panel-link.component.css']
})
export class AdminPanelLinkComponent implements OnInit{

  constructor (private http: HttpClient) { }

  usersDateInforArray;

  ngOnInit() {
    this.http.get(
      'http://localhost:8000/api/users/token/all',
      ).subscribe(data => {
        this.usersDateInforArray = data;
        console.log(data);
        console.log(this.usersDateInforArray)
      })
  }

  token = '';
  link = '';

  getLink(email, name, surname, secondname) {
    this.http.post(
      'http://localhost:8000/api/users/token',
      {
        surname: surname,
        first_name: name,
        email: email,
        second_name: secondname
      }).subscribe((data: any) => {
        console.log(data);
      if(data.token) {
        console.log(data.token);
        this.token = `/invite/${data.token}`;
        this.link = `http://localhost:4200${this.token}`;
      }
      else {
        alert('don\'t have permission')
      }
    })
  }

  sendLink(email, name, surname, secondname, link) {
    const newLink = 'http://localhost:4200' + link;
    this.http.post(
      'http://localhost:8000/api/users/token/send',
      {
        surname: surname,
        first_name: name,
        email: email,
        second_name: secondname,
        link: newLink
      }).subscribe((data: any) => {
      console.log(data)
    })
}

  copyLink(target) {
    target.focus();
    target.select();
    document.execCommand('copy');
  }
}
