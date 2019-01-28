import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataSourceService } from '../../../shared/service/data-source.service';

@Component({
  selector: 'app-admin-panel-link-info',
  templateUrl: './admin-panel-link-info.component.html',
  styleUrls: ['./admin-panel-link-info.component.css']
})
export class AdminPanelLinkInfoComponent {

  @Input() usersDataItem: any;
  @Output() onDisable = new EventEmitter();

  constructor(private dataSource: DataSourceService) { }

  disable(token: string) {
    this.dataSource.disableLink(token)
      .subscribe((data: any) => {
        this.onDisable.emit();
        console.log(data);
    });
  }

}
