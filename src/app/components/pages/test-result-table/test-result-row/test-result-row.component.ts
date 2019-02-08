import { Component, Input } from '@angular/core';
import { SolvedModel } from '../../../shared/models/solved-model';

@Component({
  selector: 'app-test-result-row',
  templateUrl: './test-result-row.component.html',
  styleUrls: ['./test-result-row.component.css']
})
export class TestResultRowComponent {

  @Input() index: number;
  @Input() userDataItem: SolvedModel;

  constructor() { }

  //checking comments for null and spaced
  // isNotEmptyOrSpaces(str){
  //   return !(str && str.match(/^ *$/));
  // }

  // changeMarkTemplate() {
  //   this.userDataItem.mark = !this.userDataItem.mark;
  // }

  saveCommentGood(event) {
    console.log(event.target.value);
    this.userDataItem.comment.good = event.target.value;
  }

  saveCommentBad(event) {
    console.log(event.target.value);
    this.userDataItem.comment.bad = event.target.value;
  }

}
