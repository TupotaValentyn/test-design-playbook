import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragEnd, CdkDragStart, CdkDragMove } from '@angular/cdk/drag-drop';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
// import { CommentEditDialogComponent } from '../../../../../comment-edit-dialog/comment-edit-dialog.component'
import { CommentEditDialogComponent } from '../../../../../comment-edit-dialog/comment-edit-dialog.component'

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor(public dialog: MatDialog) { 
    interface DragType {
      body: string,
      index: number
    } 
  }

  ngOnInit() {
    this.DragComment = this.testDrag
    this.parent = '.' + this.dataParent.className
    this.ind = this.index
    console.log(this.DragComment, '[Drag&Drop]')
  }

  @Output() DragChange = new EventEmitter();

  @Input() testDrag:any ;
  @Input() dataParent:HTMLElement;
  @Input() index: number;


  DragComment:any
  flag = false
  data = ''
  parent: string
  ind: number

  position = {
    x: 0,
    y: 0,
    xInterest: 0,
    yInterest: 0
  }
  
  dragMoved(event: CdkDragMove) {

    console.log(this.parent)
    // this.position = `> Position X: ${event.pointerPosition.x} - Y: ${event.pointerPosition.y}`;
    let element = event.source.getRootElement();
    let boundingClientRect:any = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    console.log(parentPosition)

    const width = element.parentElement.offsetWidth
    const height = element.parentElement.offsetHeight

    this.position.x = boundingClientRect.x - parentPosition.left
    console.log(boundingClientRect.y, parentPosition.top)
    this.position.y = boundingClientRect.y - parentPosition.top
    this.position.xInterest = this.position.x / width
    this.position.yInterest = this.position.y / height

    this.flag = true

    console.log(this.position)
  }

  getPosition(el) {
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }

  openDialog(): void {
    if (this.flag) {
      this.flag = false
      return
    }
    const dialogRef = this.dialog.open(CommentEditDialogComponent, {
      width: '250px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result)
      this.testDrag[this.index - 1].body = result || ''
      if (result) {
        this.data = result;
      }
      this.DragChange.emit()
      console.log(this.testDrag)
    });

  }

  
}
