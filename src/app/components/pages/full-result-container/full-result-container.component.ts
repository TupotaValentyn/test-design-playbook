import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/models/result';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../../shared/models/applicant';
import { DataSourceService } from '../../shared/service/data-source.service';
import { SolvedModel } from '../../shared/models/solved-model';

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

  constructor(private route: ActivatedRoute, private dataSource: DataSourceService) {  }

  //objects for filters
  resultItemsDefalut: Array<SolvedModel>;

  resultItemsMarkedOnly: Array<SolvedModel>;
  resultItemsWithCommentsOnly: Array<SolvedModel>;
  resultItemsMarkedAndCommented:Array<SolvedModel>;

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.dataSource.getResultForUser(token)
        .subscribe((data: Result) => {

          this.resultItem = data;

          this.resultItemsDefalut = this.resultItem.solved_models;

          this.resultItemsMarkedOnly = this.resultItem.solved_models.filter((itemMarkedOnly) => {
            if (itemMarkedOnly.mark) return true;
          });

          this.resultItemsWithCommentsOnly = this.resultItem.solved_models.filter((itemWithCommentsOnly) => {
            if (itemWithCommentsOnly.comment.good || itemWithCommentsOnly.comment.bad)
              return true;
          });

          this.resultItemsMarkedAndCommented = this.resultItem.solved_models.filter((itemMarkedAndCommented) => {
            if (itemMarkedAndCommented.comment.good ||
               itemMarkedAndCommented.comment.bad ||
               itemMarkedAndCommented.mark)
              return true;
          });

          console.log('[Result item]', this.resultItem);
        });
    }
  }

  applyFilter(test) {
    console.log(test);
  }
}