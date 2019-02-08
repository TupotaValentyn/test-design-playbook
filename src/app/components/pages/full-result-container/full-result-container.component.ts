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

  constructor(private route: ActivatedRoute, private dataSource: DataSourceService) { }

  //objects for filters
  resultItemsDefault: Array<SolvedModel> = new Array<SolvedModel>();

  resultItemsMarkedOnly: Array<SolvedModel> = new Array<SolvedModel>();
  resultItemsWithCommentsOnly: Array<SolvedModel> = new Array<SolvedModel>();
  resultItemsMarkedAndCommented:Array<SolvedModel> = new Array<SolvedModel>();

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.dataSource.getResultForUser(token)
        .subscribe((data: Result) => {

          this.resultItem = data;
          console.log(this.resultItem);

          this.resultItemsDefault = this.resultItem.solved_models;

          this.resultItemsMarkedOnly =
            this.resultItem.solved_models
              .filter((itemMarkedOnly) => itemMarkedOnly.mark);

          this.resultItemsWithCommentsOnly =
            this.resultItem.solved_models
              .filter((itemWithCommentsOnly) =>
                itemWithCommentsOnly.comment.good || itemWithCommentsOnly.comment.bad);

          this.resultItemsMarkedAndCommented =
            this.resultItem.solved_models
              .filter((itemMarkedAndCommented) =>
                itemMarkedAndCommented.comment.good || itemMarkedAndCommented.comment.bad || itemMarkedAndCommented.mark);
        });
    }
  }

  addComment(comment) {
    this.resultItem.applicant.comment = comment.value;

    this.updateComment();
  }

  updateComment() {
    const token = this.resultItem.applicant.token;
    const comment = this.resultItem.applicant.comment;

    this.dataSource.updateCommentAboutUser(token, comment)
    .subscribe();
  }
}
