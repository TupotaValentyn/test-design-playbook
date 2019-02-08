import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../../shared/service/data-source.service';
import { SolvedModel } from '../../shared/models/solved-model';
import { Result } from '../../shared/models/result';


@Component({
  selector: 'app-test-result-table',
  templateUrl: './test-result-table.component.html',
  styleUrls: ['./test-result-table.component.css']
})
export class TestResultTableComponent {

  @Input() countCheckedElements: number;
  @Input() maxCountCheckedElements: number;

  @Input() result: Result;
  models: Array<SolvedModel> = this.result.solved_models;

  onlySelected: boolean = true;

  constructor(private dataSource: DataSourceService, private route: Router) {
    this.onlySelected = true;

    this.countCheckedElements = 5;
    this.maxCountCheckedElements = 5;

    this.models = JSON.parse(localStorage.getItem('savedTestResults'))
  }

  displayAll() {
    this.onlySelected = false;
  }

  displaySelected() {
    this.onlySelected = true;
  }

  sendData() {
    const sendData = this.models;
    this.dataSource.saveResults(sendData).subscribe( () => {
      this.route.navigate(['/finish'])
    })

  }

  saveData() {
    localStorage.setItem('savedTestResults', JSON.stringify(this.result));
    const sendData = this.result;
    console.log(this.result);

    // this.dataSource.updateResult(sendData).subscribe();
  }
}
