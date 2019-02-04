import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/models/result';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../../shared/models/applicant';
import { DataSourceService } from '../../shared/service/data-source.service';

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

  onlySelected = true;

  constructor(private route: ActivatedRoute, private dataSource: DataSourceService) {  }

  displayAll() {
    this.onlySelected = false;
  }

  displaySelected() {
    this.onlySelected = true;
  }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.dataSource.getResultForUser(token)
        .subscribe((data: Result) => {

          this.resultItem = data;
          console.log(this.resultItem);
        });
    }
  }
}