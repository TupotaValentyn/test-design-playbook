import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/models/result';
import { DataSourceService } from '../../shared/service/data-source.service';
import {DatePipe, KeyValue} from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  
  results: Array<Result> = [];
  resultsDisplay: Array<Result> = []; // for search
  resultsSet: Set<Result>;
  groupResults: Map<String, Array<Result>> = new Map<String, Array<Result>>();
  isLoadedContent: boolean;

  constructor(private dataSource: DataSourceService,
              private datePipe: DatePipe,
              private snackBar: MatSnackBar) {  }

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

        this.groupResults = ResultsPageComponent.doGroupResults(this.results);

      }, (error) => {
        this.snackBar.open(error, 'Close', { duration: 2000 });
      });
  }

  searchResults(request) {
    this.resultsDisplay = [];
    this.resultsSet.clear();

    if (!request) {
      this.resultsDisplay = this.results;
      this.groupResults = ResultsPageComponent.doGroupResults(this.resultsDisplay);
      return;
    }

    this.checkAllKeywords(request);

    this.groupResults = ResultsPageComponent.doGroupResults(this.resultsDisplay);
  }

  checkAllKeywords(request: string) {
    const allKeywords = request.toLowerCase().trim().split(" ");

    allKeywords.forEach(keyword => {
      this.results.forEach(res => {
        if (res.applicant.surname.toLowerCase().includes(keyword) || res.applicant.first_name.toLocaleLowerCase().includes(keyword)
        || res.applicant.second_name.toLowerCase().includes(keyword) || keyword === this.transformDate(res.solved_date)) {
          if (!this.resultsSet.has(res)) {
            this.resultsSet.add(res);
            this.resultsDisplay.push(res);
          }
        }
      });
    });
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'dd-MM-yyyy');
  }

  onKeyDown(event) {
    if (event.key === "Enter") {
      this.searchResults(event.target.value);
    }
  }

  private static doGroupResults(value: Array<Result>): Map<String, Array<Result>>  {
    const groupResults: Map<String, Array<Result>> = new Map<String, Array<Result>>();

    value.forEach((item: Result) => {
      const solved_date = new Date(item.solved_date);
      const daytime = ResultsPageComponent.dateFormat(solved_date);
      if (groupResults.get(daytime)) {
        groupResults.get(daytime).push(item);
      } else {
        groupResults.set(daytime, [item]);
      }
    });

    console.log(groupResults);

    groupResults.forEach((results, key) => {
      results.sort((a, b) => new Date(b.solved_date).getTime() - new Date(a.solved_date).getTime());
    });
    return groupResults;
  }

  reverseKeyOrder = (a: KeyValue<String, Array<Result>>, b: KeyValue<String, Array<Result>>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

  private static dateFormat(solved_date) {
    return ResultsPageComponent.timeFormat(solved_date.getDate() + 1) + '/' + ResultsPageComponent.timeFormat(solved_date.getMonth() + 1) + '/' + solved_date.getFullYear();
  }

  private static timeFormat(value: Number): String {
    return value < 10 ? '0' + value : value.toString();
  }

}
