import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HelpInstructionModalComponent } from '../help-instruction-modal/help-instruction-modal.component';
import { SolvedModel } from '../../../shared/models/solved-model';
// import { DRAGDROP } from '../../../shared/drag-drop'

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent {

  constructor (public dialog: MatDialog) { }
  

  comment = [
  ]
  parent: HTMLElement
  

  @Input() currentSelectedModel: SolvedModel;
  //for button "Continue" (Input from main-cont)
  @Input() countCheckedElements: number;
  @Input() DragDrop:Array<Object>

  @Output() onSaveGoodComment = new EventEmitter();
  @Output() onSaveBadComment = new EventEmitter();
  @Output() onChoose = new EventEmitter<SolvedModel>();
  @Output() onNextImg = new EventEmitter<void>();
  @Output() onPrevImg = new EventEmitter<void>();
  @Output() onSelect = new EventEmitter<SolvedModel>();
  @Output() onSend = new EventEmitter();
  @Output() onOpenCloseSidebar = new EventEmitter();

  maxCountCheckedElements = 5;
  mark = false;

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

  addDragDrop(parent) {
    this.mark = true
    this.comment.push({
      index: this.comment.length++,
      body: ''
    })
    this.comment = this.comment.filter(item => item)
    this.parent = parent
    this.DragDrop = this.comment
    console.log(this.DragDrop, '[test-content]')
  }

}
