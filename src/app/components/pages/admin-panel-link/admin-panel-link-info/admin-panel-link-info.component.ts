import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataSourceService } from '../../../shared/service/data-source.service';
import { Applicant } from '../../../shared/models/applicant';
import { MatDialog } from '@angular/material';
import {LinkInfoDialogComponent} from './link-info-dialog/link-info-dialog.component';

@Component({
  selector: 'app-admin-panel-link-info',
  templateUrl: './admin-panel-link-info.component.html',
  styleUrls: ['./admin-panel-link-info.component.css']
})
export class AdminPanelLinkInfoComponent {

  @Input() usersDataItem: Applicant;
  @Output() onDisable = new EventEmitter();

  constructor(private dataSource: DataSourceService, public dialog: MatDialog) { }

  disable(token: string): void {
    this.dataSource.disableLink(token)
      .subscribe((data: any) => {
        this.onDisable.emit();
        console.log(data);
    });
  }

  showMoreInfo(token: string): void {
    const dialogRef = this.dialog.open(LinkInfoDialogComponent, {
      width: '350px',
      data: this.usersDataItem
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  getShortUserName() {
    if (this.usersDataItem) {
      if (this.usersDataItem.second_name
        && this.usersDataItem.second_name.charAt
        && this.usersDataItem.first_name
        && this.usersDataItem.first_name.charAt) {
        return this.usersDataItem.surname + " " + this.usersDataItem.first_name.charAt(0) + "." + this.usersDataItem.second_name.charAt(0) + ".";
      }
      return this.usersDataItem.surname;
    } else {
      return "Unknown"
    }
  }

}
