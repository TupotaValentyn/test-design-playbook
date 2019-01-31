import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Result } from '../../../shared/models/result';
import { DataSourceService } from '../../../shared/service/data-source.service';
@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.css']
})
export class ResultsCardComponent {

  @Output() onDelete = new EventEmitter();

  constructor(private dataSource: DataSourceService) {  }

  deleteResult(token) {
    this.dataSource.deleteResult(token)
      .subscribe(() =>{
        this.onDelete.emit();
      });
  }

  @Input() result_item: Result;
  @Input() index: number;

}
