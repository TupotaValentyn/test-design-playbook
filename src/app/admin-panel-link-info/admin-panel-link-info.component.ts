import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-panel-link-info',
  templateUrl: './admin-panel-link-info.component.html',
  styleUrls: ['./admin-panel-link-info.component.css']
})
export class AdminPanelLinkInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() usersDataItem: any;

}
