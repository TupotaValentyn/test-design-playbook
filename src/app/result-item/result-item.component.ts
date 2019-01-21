import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})

export class ResultItemComponent {

  @Input() index: number;
  @Input() item: any;

  constructor() {
    // this.item = {
    //   url: "../assets/models/good_template_1.svg",
    //   comment: "some commentar about template",
    //   mark: true,
    //   name: "Good template #1"
    // }
  }

}
