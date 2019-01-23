import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-result-table',
  templateUrl: './test-result-table.component.html',
  styleUrls: ['./test-result-table.component.css']
})
export class TestResultTableComponent {

  @Input() countCheckedElements: number;
  @Input() maxCountCheckedElements: number;

  @Input() models: any;

  constructor() {
    this.countCheckedElements = 5;
    this.maxCountCheckedElements = 5;

    this.models = [{
      url: "../../assets/models/Colorful-1.jpg",
      mark: false,
      comment: "Bad template"
    },{
      url: "../../assets/models/Colorful-5.jpg",
      mark: false,
      comment: "Bad colors"
    },{
      url: "../../assets/models/bad_template_3.svg",
      mark: false,
      comment: "so bad..."
    },{
      url: "../../assets/models/bad_template_4.svg",
      mark: false,
      comment: ":(",
    },{
      url: "../../assets/models/bad_template_5.svg",
      mark: true,
      comment: "I really liked it!"
    },{
      url: "../../assets/models/bad_template_6.svg",
      mark: true,
      comment: "It's good too."
    }];
  }
}
