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

  @Input() currentModel: SolvedModel;
  constructor (public dialog: MatDialog) { }

  @Input() currentSelectedModel: any;

  @Output() onSaveGoodComment = new EventEmitter();

  @Output() onSaveBadComment = new EventEmitter();

  @Output() onChoose = new EventEmitter<SolvedModel>();

  //for button "Continue" (Input from main-cont)
  @Input() countCheckedElements: number;

  maxCountCheckedElements = 5;
  @Output() onNextImg = new EventEmitter<void>();
  @Output() onPrevImg = new EventEmitter<void>();

  @Input() models: any;

  @Output() onSelect = new EventEmitter();
  //end

  @Output() onSend = new EventEmitter();

  @Output() onOpenCloseSidebar = new EventEmitter();

  moveToNextPage() {
    this.onSend.emit();
  }

  saveCommentGood(e) {
    this.currentSelectedModel.good_comment = e.target.value;
    this.onSaveGoodComment.emit(this.currentSelectedModel);
  }

  saveCommentBad(e) {
    this.currentSelectedModel.bad_comment = e.target.value;
    this.onSaveBadComment.emit(this.currentSelectedModel);
  }

  //delete
  chooseImage(e) {
    console.log(e.checked);
    this.currentSelectedModel.mark = e.checked;
    this.onChoose.emit(this.currentSelectedModel);
    console.log('IMAGE CHOOSEN');
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
