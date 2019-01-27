import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/models/result';
import { Applicant } from '../../shared/models/applicant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  results: Array<Result> = [{
    solved_models: [{
      model: {
        _id: "some_id",
        url: "../../assets/models/bat_template_1.svg",
        answer: true,
        name: "Bad model"
      },
      mark: true,
      comment: ""
    }],
    applicant: {
      surname: "Polishchuk",
      first_name: "Volodymyr",
      second_name: "Petrovych",
      email: "thevivalley@gmail.com",
      token: "random_key",
      status: Applicant.STATUS_EVALUATED,
      created: new Date(),
      comment: "",
      expired: new Date()
    },
    solved_date: new Date()
  },{
    solved_models: [{
      model: {
        _id: "some_id",
        url: "../../assets/models/bat_template_1.svg",
        answer: true,
        name: "Bad model"
      },
      mark: true,
      comment: ""
    }],
    applicant: {
      surname: "Polishchuk",
      first_name: "Volodymyr",
      second_name: "Petrovych",
      email: "thevivalley@gmail.com",
      token: "random_key",
      status: Applicant.STATUS_EVALUATED,
      created: new Date(),
      comment: "Good man",
      expired: new Date()
    },
    solved_date: new Date()
  },{
    solved_models: [{
      model: {
        _id: "some_id",
        url: "../../assets/models/bat_template_1.svg",
        answer: true,
        name: "Bad model"
      },
      mark: true,
      comment: ""
    }],
    applicant: {
      surname: "Polishchuk",
      first_name: "Volodymyr",
      second_name: "Petrovych",
      email: "thevivalley@gmail.com",
      token: "random_key",
      status: Applicant.STATUS_EVALUATED,
      created: new Date(),
      comment: "",
      expired: new Date()
    },
    solved_date: new Date()
  }];

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
    this.http
      .get('http://localhost:8000/results/all')
      .subscribe((data: Array<Result>) => {
        this.results = data;
      });
  }
}
