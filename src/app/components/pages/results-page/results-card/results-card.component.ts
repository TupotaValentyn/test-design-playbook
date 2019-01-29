import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Result } from '../../../shared/models/result';
import { DataSourceService } from '../../../shared/service/data-source.service';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.css']
})
export class ResultsCardComponent implements OnInit {


  @Input() result_item: Result;
  @Input() index: number;
  @Output() onRemove = new EventEmitter();

  constructor(private dataSource: DataSourceService) { }

  ngOnInit() {

  }

  removeResult() {
    this.dataSource.removeResult(this.result_item);
    this.onRemove.emit();
  }
}
