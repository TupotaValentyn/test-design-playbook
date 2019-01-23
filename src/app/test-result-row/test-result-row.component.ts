import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-result-row',
  templateUrl: './test-result-row.component.html',
  styleUrls: ['./test-result-row.component.css']
})
export class TestResultRowComponent {

  @Input() index: number;
  @Input() item: any;

  constructor() {}
}
