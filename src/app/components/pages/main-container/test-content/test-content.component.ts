import { Component, Input, Output, EventEmitter } from '@angular/core';
import {SolvedModel} from '../../../shared/models/solved-model';


@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent {

  @Input() currentModel: SolvedModel;

  @Input() countCheckedElements = 0;

  @Input() maxCountCheckedElements = 5;

  @Output() onSaveComment = new EventEmitter<SolvedModel>();

  @Output() onSend = new EventEmitter<void>();

  @Output() onChoose = new EventEmitter<SolvedModel>();

  @Output() onNextImg = new EventEmitter<void>();
  @Output() onPrevImg = new EventEmitter<void>();

  isPictureOpened = false;

  saveComment(e) {
    this.currentModel.comment = e.target.value;
    this.onSaveComment.emit(this.currentModel); 
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

  openPrevImage() {
    this.onPrevImg.emit();
  }

  openNextImage() {
    this.onNextImg.emit();
  }

}
