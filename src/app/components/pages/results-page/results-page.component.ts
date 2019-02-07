import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/models/result';
import { DataSourceService } from '../../shared/service/data-source.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  
  results: Array<Result> = [];

  //for date-sorted display
  // resultMap: Map<string, Array<Result>> = new Map();
  
  isLoadedContent: boolean = false;
  
  constructor(private dataSource: DataSourceService,
              private datePipe: DatePipe,
              private snackBar: MatSnackBar) {  }
  
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

        // Grouping elements breaks other functional 
        // HZ kak eto ispravit
        // this.results.forEach(item => {
        //   let respons = this.resultMap.get(this.datePipe.transform(item.solved_date, 'dd-MM-yyyy'));
        //   if (respons) {
        //     respons.push(item)
        //   } else {
        //     this.resultMap.set(this.datePipe.transform(item.solved_date, 'dd-MM-yyyy'), [item])
        //   }
        // });
        // console.log('value', this.resultMap.values());
        // console.log('keys', this.resultMap.keys());
        // console.log('entries', this.resultMap.entries());

        this.isLoadedContent = true;
      }, (error) => {
        this.snackBar.open(error, 'Close', { duration: 2000 });
      });
  }
}