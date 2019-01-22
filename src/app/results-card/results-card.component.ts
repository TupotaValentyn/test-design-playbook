import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.css']
})
export class ResultsCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.results = this.childData.results
    this.fullname = `
      ${ this.childData.surname } 
      ${ this.childData.firstname } 
      ${ this.childData.secondname }
      `;
    this.comment = this.childData.comment
    this.answer = this.childData.answers
    this.maxAnswer = this.childData.maxAnswers

  }

  @Input() childData: any;
  @Input() index: any;
  results: any;
  fullname: string;
  comment: string;
  answer: number;
  maxAnswer: number;
}
