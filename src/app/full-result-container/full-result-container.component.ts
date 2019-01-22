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
      surname: "Surname",
      name: "Name",
      secondName: "Second name",
      email: "example@example.com",
      answers: 2,
      maxCountAnswers: 5,
      results: [{
        url: "../assets/models/good_template_1.svg",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
          "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
          "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
          "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
          "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        mark: true,
        answer: true,
        name: "Good template #1"
      },{
        url: "../../assets/models/Colorful-5.jpg",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
          "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
          "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
          "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
          "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        mark: true,
        answer: false,
        name: "Bad template #2"
      },{
        url: "../../assets/models/bad_template_3.svg",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
          "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
          "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
          "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
          "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
          "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        mark: false,
        answer: false,
        name: "Bad template #3"
      }]
    }
  }
}
