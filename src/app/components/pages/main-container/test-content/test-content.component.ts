import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HelpInstructionModalComponent } from '../help-instruction-modal/help-instruction-modal.component';
import {SolvedModel} from '../../../shared/models/solved-model';


@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent {

  constructor (public dialog: MatDialog) { }

  @Input() currentSelectedModel: SolvedModel;
  //for button "Continue" (Input from main-cont)
  @Input() countCheckedElements: number;

  @Output() onSaveGoodComment = new EventEmitter();
  @Output() onSaveBadComment = new EventEmitter();
  @Output() onChoose = new EventEmitter<SolvedModel>();
  @Output() onNextImg = new EventEmitter<void>();
  @Output() onPrevImg = new EventEmitter<void>();
  @Output() onSelect = new EventEmitter<SolvedModel>();
  @Output() onSend = new EventEmitter();
  @Output() onOpenCloseSidebar = new EventEmitter();

  maxCountCheckedElements = 5;

  moveToNextPage() {
    this.onSend.emit();
  }

  saveCommentGood(e) {
    this.currentSelectedModel.comment.good = e.target.value;
    this.onSaveGoodComment.emit(this.currentSelectedModel);
  }

  saveCommentBad(e) {
    this.currentSelectedModel.comment.bad = e.target.value;
    this.onSaveBadComment.emit(this.currentSelectedModel);
  }

  openPrevImage() {
    this.onPrevImg.emit();
  }

  openNextImage() {
    this.onNextImg.emit();
  }

  openCloseSidebar() {
    this.onOpenCloseSidebar.emit();
  }

  selectModel() {
    this.currentSelectedModel.mark = !this.currentSelectedModel.mark;
    this.onSelect.emit(this.currentSelectedModel);
  }

  openHelpDialog(): void {
    this.dialog.open(HelpInstructionModalComponent, {width: '600px'});
  }

}
