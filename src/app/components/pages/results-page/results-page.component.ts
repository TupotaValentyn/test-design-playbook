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

  //for date-sorted display ADD TYPES
  resultMap: any;
  results: Array<Result>;


  constructor(private dataSource: DataSourceService, private datePipe: DatePipe) {  }

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

        console.log("[RESULTS]", this.results);

        this.resultMap = new Map();
        this.results.forEach(item => {
          let respons = this.resultMap.get(this.datePipe.transform(item.solved_date, 'dd-MM-yyyy'));
          if (respons) {
            respons.push(item)
          } else {
            this.resultMap.set(this.datePipe.transform(item.solved_date, 'dd-MM-yyyy'), [item])
          }
        })
      }, (error) => {
        alert(error);
      });
  }
}