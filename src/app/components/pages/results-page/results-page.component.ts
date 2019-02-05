import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/models/result';
import { DataSourceService } from '../../shared/service/data-source.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  results: Array<Result> = [];
  isLoadedContent: boolean = false;

  constructor(private dataSource: DataSourceService) {  }

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
        this.isLoadedContent = true;
      }, (error) => {
        alert(error);
      });
  }
}

