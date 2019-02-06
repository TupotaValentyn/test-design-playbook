import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/models/result';
import { DataSourceService } from '../../shared/service/data-source.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  results: Array<Result> = [];
  resultsDisplay: Array<Result> = []; // for search
  isLoadedContent: boolean = false;

  constructor(private dataSource: DataSourceService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.update();
  }

  updateAfterDelete() {
    this.update();
  }

  update() {
    this.dataSource.getAllResults()
      .subscribe((data: Array<Result>) => {
        this.results = data;
        this.resultsDisplay = data;
        this.isLoadedContent = true;
      }, (error) => {
        alert(error);
      });
  }

  searchResults(search_request) {
    console.log(search_request);

    const keyword = search_request.value;

    this.resultsDisplay = [];

    if (keyword === "") {
      this.resultsDisplay = this.results;
      return;
    }

    this.results.forEach(res => {
      if (res.applicant.surname.includes(keyword)) {
        this.resultsDisplay.push(res);
      } else if (res.applicant.first_name.includes(keyword)) {
        this.resultsDisplay.push(res);
      } else if (res.applicant.second_name.includes(keyword)) {
        this.resultsDisplay.push(res);
      } else if (this.datePipe.transform(res.solved_date, 'dd-MM-yyyy') === (keyword)) {
        this.resultsDisplay.push(res);
      }
    });
  }
}

