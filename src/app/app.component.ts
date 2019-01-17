import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.test = data
    })
    console.log(this.test)
  }

  print () {
    console.log(this.test)
  }
}
