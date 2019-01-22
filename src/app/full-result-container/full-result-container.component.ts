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
        answer: true,
        name: "Good template #1"
      },{
        url: "../../assets/models/Colorful-5.jpg",
        comment: "like!",
        mark: true,
        answer: false,
        name: "Bad template #2"
      },{
        url: "../../assets/models/bad_template_3.svg",
        comment: "so bad...",
        mark: false,
        answer: false,
        name: "Bad template #3"
      },{
        url: "../../assets/models/Colorful-1.jpg",
        mark: false,
        answer: true,
        comment: "",
        name: "Bad template #1"
      },{
        url: "../../assets/models/Colorful-5.jpg",
        mark: false,
        answer: false,
        comment: "",
        name: "Bad template #2"
      },{
        url: "../../assets/models/bad_template_3.svg",
        mark: false,
        answer: false,
        comment: "",
        name: "Bad template #3"
      },{
        url: "../../assets/models/bad_template_4.svg",
        mark: false,
        answer: false,
        comment: "",
        name: "Bad template #4"
      },{
        url: "../../assets/models/bad_template_5.svg",
        mark: false,
        answer: false,
        comment: "",
        name: "Bad template #5"
      },{
        url: "../../assets/models/bad_template_6.svg",
        mark: false,
        answer: false,
        comment: "",
        name: "Bad template #6"
      }]
    }
  }
}
