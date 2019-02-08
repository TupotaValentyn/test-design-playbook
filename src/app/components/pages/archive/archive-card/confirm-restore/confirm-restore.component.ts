import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Applicant } from '../../../../shared/models/applicant';

@Component({
  selector: 'app-confirm-restore',
  templateUrl: './confirm-restore.component.html',
  styleUrls: ['./confirm-restore.component.css']
})
export class ConfirmRestoreComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Applicant) { }
}
