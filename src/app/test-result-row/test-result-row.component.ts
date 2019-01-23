import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-result-row',
  templateUrl: './test-result-row.component.html',
  styleUrls: ['./test-result-row.component.css']
})
export class TestResultRowComponent implements OnInit {

  @Input() item: any;
  @Input() index: number;

  constructor() {
    this.index = 1;
    this.item = {
      url: "",
      mark: true,
      comment: "Good!"
    };
  }

  ngOnInit() {
  }

}
