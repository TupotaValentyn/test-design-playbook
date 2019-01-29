import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Applicant } from '../../../../shared/models/applicant';

@Component({
  selector: 'link-info-dialog',
  templateUrl: './link-info-dialog.component.html',
})
export class LinkInfoDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Applicant) {}


  getLink(token): string {
    return `http://localhost:4200/invite/${token}`;
  }

  selectLink(element): void {
    element.select();
  }
}
