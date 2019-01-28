import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent {

  @Input() currentModel: any;

  @Input() countCheckedElements = 0;

  @Input() maxCountCheckedElements = 5;

  // @Output() onSaveComment = new EventEmitter();

  @Output() onSaveGoodComment = new EventEmitter();

  @Output() onSaveBadComment = new EventEmitter();

  @Output() onSend = new EventEmitter();

  @Output() onChoose = new EventEmitter();

  isPictureOpened = false;

  // saveComment(e) {
  //   this.currentModel.comment = e.target.value;
  //   this.onSaveComment.emit(this.currentModel); 
  // }

  saveCommentGood(e) {
    this.currentModel.good_comment = e.target.value;
    this.onSaveGoodComment.emit(this.currentModel); 
  }

  saveCommentBad(e) {
    this.currentModel.bad_comment = e.target.value;
    this.onSaveBadComment.emit(this.currentModel); 
  }

  moveToNextPage() {
    this.onSend.emit();
  }

  //delete
  chooseImage(e) {
    console.log(e.checked);
    this.currentModel.mark = e.checked;
    this.onChoose.emit(this.currentModel);
    console.log('IMAGE CHOOSEN');
  }

  changeScreenMode() {
    this.isPictureOpened = !this.isPictureOpened
  }




}
