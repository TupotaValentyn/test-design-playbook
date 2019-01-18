import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent {

  @Input() currentModel: any;

  @Input() countCheckedElements = 0; // for <span> element

  @Output() onSaveComment = new EventEmitter();

  @Output() onSend = new EventEmitter();

  @Output() onChoose = new EventEmitter();

  saveComment(e) {
    console.log("[test-content b] ", e.value);
    this.currentModel[0].comment = e.value;
    console.log("[test-content a] ", e.value);
    this.onSaveComment.emit(e.currentModel);
  }

  sendAnswers() {
    this.onSend.emit();
  }

  chooseImage(e) {
    console.log(e.checked);
    this.currentModel.mark = e.checked;
    this.onChoose.emit(this.currentModel);
  }

  // checkParams(comment) {
  //   // let comment = document.getElementsByClassName('.comment');
  //   console.log(comment);
  //   let button = document.getElementsByClassName('.button__save');
     
  //   // if(comment.length != 0) {
  //   //   button.removeAttr('disabled');
  //   // } else {
  //   //   button.attr('disabled', 'disabled');
  //   // }
  // }

}
