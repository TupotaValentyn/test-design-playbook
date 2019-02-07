import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Applicant } from '../../../../shared/models/applicant';

@Component({
  selector: 'link-info-dialog',
  templateUrl: './link-info-dialog.component.html',
  styleUrls: ['./link-info-dialog.component.css']
})
export class LinkInfoDialogComponent {

  fullDomain = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Applicant) {}


  getLink(token): string {
    return `${this.fullDomain}/invite/${token}`;
  }

  selectLink(element): void {
    if (element && element.select) {
      element.select();
    } else {
      alert("Element not found");
    }
  }
}
