import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Applicant } from '../../../../shared/models/applicant';

@Component({
  selector: 'app-confirm-remove',
  templateUrl: './confirm-remove.component.html',
  styleUrls: ['./confirm-remove.component.css']
})
export class ConfirmRemoveComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Applicant) { }
}
