import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/models/result';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Applicant } from '../../shared/models/applicant';

@Component({
  selector: 'app-full-result-container',
  templateUrl: './full-result-container.component.html',
  styleUrls: ['./full-result-container.component.css']
})
export class FullResultContainerComponent implements OnInit {

  resultItem: Result = {
    applicant: new Applicant(),
    solved_models: [],
    solved_date: new Date()
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {  }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.http.post('http://localhost:8000/results/one', {token: token})
        .subscribe((data: Result) => {

          this.resultItem = data;
          console.log(this.resultItem);
        });
    }
  }
}
