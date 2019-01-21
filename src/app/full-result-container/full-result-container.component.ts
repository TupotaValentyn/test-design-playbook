import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-result-container',
  templateUrl: './full-result-container.component.html',
  styleUrls: ['./full-result-container.component.css']
})
export class FullResultContainerComponent {

  @Input() resultItem: any;

  constructor() {
    this.resultItem = {
      surname: "TestSurname",
      name: "TestName",
      secondName: "TestSecondName",
      email: "TestEmail",
      answers: 2,
      maxCountAnswers: 5,
      results: [{
        url: "../assets/models/good_template_1.svg",
        comment: "some commentar about template",
        mark: true,
        name: "Good template #1"
      },{
        url: "../../assets/models/Colorful-5.jpg",
        comment: "like!",
        mark: true,
        name: "Bad template #2"
      },{
        url: "../../assets/models/bad_template_3.svg",
        comment: "so bad...",
        mark: false,
        name: "Bad template #3"
      }]
    }
  }

}
