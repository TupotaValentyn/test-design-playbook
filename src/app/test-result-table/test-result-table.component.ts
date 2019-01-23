import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-result-table',
  templateUrl: './test-result-table.component.html',
  styleUrls: ['./test-result-table.component.css']
})
export class TestResultTableComponent implements OnInit {

  @Input() countCheckedElements: number;
  @Input() maxCountCheckedElements: number;

  @Input() models: any;

  constructor() {
    this.countCheckedElements = 1;
    this.maxCountCheckedElements = 5;

    this.models = [{
      url: "",
      mark: true,
      comment: ""
    }];
  }

  ngOnInit() {
  }

}
