import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test-result-table',
  templateUrl: './test-result-table.component.html',
  styleUrls: ['./test-result-table.component.css']
})
export class TestResultTableComponent {

  @Input() countCheckedElements: number;
  @Input() maxCountCheckedElements: number;

  @Input() models: any;

  constructor(private http: HttpClient, private route: Router) {
    this.countCheckedElements = 5;
    this.maxCountCheckedElements = 5;

    this.models = JSON.parse(localStorage.getItem('savedTestResults'))
  }

  sendData() {
    this.http.post(
      'http://localhost:8000/results/save',
      { models: this.models }
    ).subscribe( data => {
      this.route.navigate(['/finish'])
    })

  }
}
