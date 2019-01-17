import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent {

  @Input() currentModel: any;

  @Input() countCheckedElements: number; // for <span> element

  @Output() onSaveComment = new EventEmitter();

  @Output() onSend = new EventEmitter();

  @Output() onChoose = new EventEmitter();

  // element: {
  //   _id: string;
  //   url: string;
  //   comment: string;
  //   mark: boolean;
  // }

  saveComment(e) {
    console.log("[test-content b] ", e.value);
    this.currentModel.comment = e.value;
    console.log("[test-content a] ", e.value);

    this.onSaveComment.emit(e.value);
  }

  sendAnswers() {
    this.onSend.emit();
  }

  chooseImage(e) {
    console.log(e.checked);
    this.currentModel.mark = e.checked;
    
    this.onChoose.emit(e.checked);
  }

}
