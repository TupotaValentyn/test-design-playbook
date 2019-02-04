import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Applicant } from '../../../../shared/models/applicant';

@Component({
  selector: 'app-confirm-remove',
  templateUrl: './confirm-remove.component.html',
  styleUrls: ['./confirm-remove.component.css']
})
export class ConfirmRemoveComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Applicant) { }

  ngOnInit() {
  }

}
