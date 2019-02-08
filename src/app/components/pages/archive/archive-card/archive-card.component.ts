import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Result } from '../../../shared/models/result';
import { DataSourceService } from '../../../shared/service/data-source.service';
import { MatDialog } from '@angular/material';
import { ConfirmRestoreComponent } from './confirm-restore/confirm-restore.component';

@Component({
  selector: 'app-archive-card',
  templateUrl: './archive-card.component.html',
  styleUrls: ['./archive-card.component.css', '../../results-page/results-card/results-card.component.css']
})
export class ArchiveCardComponent {

  @Input() result_item: Result;
  @Input() index: number;
  @Output() onDelete = new EventEmitter();

  constructor(private dataSource: DataSourceService, public dialog: MatDialog) {  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmRestoreComponent, {
      data: this.result_item.applicant
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.updateArchiveData(this.result_item.applicant.token)
        .subscribe(() => {
          this.onDelete.emit();
      });
    }
    });
  }
}
