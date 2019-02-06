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
  resultsSet: Set<Result>;
  isLoadedContent: boolean = false;

  constructor(private dataSource: DataSourceService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.update();
    this.resultsSet = new Set<Result>();
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

  searchResults(request) {
    this.resultsDisplay = [];
    this.resultsSet.clear();

    if (request === "") {
      this.resultsDisplay = this.results;
      return;
    }

    const allKeywords = request.split(" ");
    console.log(allKeywords);

    allKeywords.forEach(keyword => {
      this.results.forEach(res => {
        if (res.applicant.surname.includes(keyword) || res.applicant.first_name.includes(keyword)
        || res.applicant.second_name.includes(keyword) || this.datePipe.transform(res.solved_date, 'dd-MM-yyyy') === keyword) {
          if (!this.resultsSet.has(res)) {
            this.resultsSet.add(res);
            this.resultsDisplay.push(res);
          }
        }
      });
    });
  }

  onKeyDown(event) {
    if (event.key === "Enter") {
      this.searchResults(event.target.value);
    }
  }
}

