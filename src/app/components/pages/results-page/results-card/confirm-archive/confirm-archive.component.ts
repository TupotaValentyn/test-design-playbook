import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Applicant } from '../../../../shared/models/applicant';

@Component({
  selector: 'app-confirm-archive',
  templateUrl: './confirm-archive.component.html',
  styleUrls: ['./confirm-archive.component.css']
})
export class ConfirmArchiveComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Applicant) { }
}
