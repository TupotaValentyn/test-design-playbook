import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJhY2Nlc3MiOiJhZG1pbiIsImlhdCI6MTU0ODMzOTc0MiwiZXhwIjoxNTQ4NDI2MTQyfQ.ZvIMmzWh198CnxvRCSi59p4EsEoQc65tXTvcfnam_Rg');
  }

}
