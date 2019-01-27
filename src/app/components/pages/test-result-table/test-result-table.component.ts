import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../../shared/service/data-source.service';


@Component({
  selector: 'app-test-result-table',
  templateUrl: './test-result-table.component.html',
  styleUrls: ['./test-result-table.component.css']
})
export class TestResultTableComponent {

  @Input() countCheckedElements: number;
  @Input() maxCountCheckedElements: number;

  @Input() models: any;

  constructor(private dataSource: DataSourceService, private route: Router) {
    this.countCheckedElements = 5;
    this.maxCountCheckedElements = 5;

    this.models = JSON.parse(localStorage.getItem('savedTestResults'))
  }

  sendData() {
    this.dataSource.saveResults(this.models).subscribe( () => {
      this.route.navigate(['/finish'])
    })

  }
}
