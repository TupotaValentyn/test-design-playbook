import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.css']
})
export class ResultsCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.childData)
    this.results = this.childData['0'].results
    this.fullname = `
      ${ this.childData['0'].surname } ${ this.childData['0'].firstname } ${ this.childData['0'].secondname }
      `;
    this.comment = this.childData['0'].comment
    this.answer = this.childData['0'].answers
    this.maxAnswer = this.childData['0'].maxAnswers
    console.log(this.fullname)
    console.log(this.comment)

  }

  @Input() childData: any;
  results: any;
  fullname: string;
  comment: string;
  answer: number;
  maxAnswer: number;
}
