import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/models/result';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  results: Array<Result> = [];

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
    this.http
      .get('http://localhost:8000/api/results/all')
      .subscribe((data: Array<Result>) => {
        this.results = data;
      }, (error) => {
        alert(error);
      });
  }
}
