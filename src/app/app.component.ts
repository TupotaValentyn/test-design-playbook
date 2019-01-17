import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private http: HttpClient) {

  }

  test: any = {a: 1111}

  ngOnInit():void {
    this.http.get('http://localhost:8000/model/all').subscribe(data => {
      this.test = data
      console.log(data)
    })
  }

  print () {
    this.http.post('http://localhost:8000/results/save', {
      models: [
        {_id: '1'},
        {_id: '2'},
        {_id: '3'},
        {_id: '4'},
        {_id: '5'}
      ],
      user: {
        _id: '6'
      }
    }).subscribe(t => {
      console.log(t)
    })
  }
}
