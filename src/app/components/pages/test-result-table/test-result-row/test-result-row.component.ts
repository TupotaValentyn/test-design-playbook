import { Component, Input } from '@angular/core';
import {SolvedModel} from '../../../shared/models/solved-model';

@Component({
  selector: 'app-test-result-row',
  templateUrl: './test-result-row.component.html',
  styleUrls: ['./test-result-row.component.css']
})
export class TestResultRowComponent {

  @Input() index: number;
  @Input() item: SolvedModel;

  constructor() {}
}
