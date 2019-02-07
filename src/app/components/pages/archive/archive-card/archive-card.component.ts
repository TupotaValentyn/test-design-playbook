import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Result } from '../../../shared/models/result';
import { DataSourceService } from '../../../shared/service/data-source.service';
import { MatDialog } from '@angular/material';
// import { ConfirmArchiveComponent } from './confirm-archive/confirm-archive.component';


@Component({
  selector: 'app-archive-card',
  templateUrl: './archive-card.component.html',
  styleUrls: ['./archive-card.component.css']
})
export class ArchiveCardComponent implements OnInit{

  @Input() result_item: Result;
  @Input() index: number;
  @Output() onDelete = new EventEmitter();

  constructor(private dataSource: DataSourceService, public dialog: MatDialog) {  }

  ngOnInit () {
    console.log(this.result_item)
    console.log(111)
  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(ConfirmArchiveComponent, {
  //     data: this.result_item.applicant
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === true) {
  //       this.dataSource.deleteResult(this.result_item.applicant.token)
  //       .subscribe(() => {
  //         this.onDelete.emit();
  //     });
  //   }
  //   });
  // }
}
