import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent implements OnInit {

  countCheckedElements: number = 0; // for <span> element

  @Input() checkedElem: number; //???

  @Output() onSaveComment = new EventEmitter<boolean>();

  @Output() onSend = new EventEmitter<boolean>();

  @Output() onChoose = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  comment: '';

  saveComment(e) {
    this.comment = e.value;
    // console.log(this.comment);

    // this.onSaveComment.emit();
  }

  sendAnswers() {
    // this.onSend.emit();
  }

  chooseImage(e) {
    console.log(e.checked);
    if (e.checked) {
      // send information about this image is checked
    }
    // this.onChoose.emit();
  }

}
