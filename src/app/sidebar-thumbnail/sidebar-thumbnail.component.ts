import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-thumbnail',
  templateUrl: './sidebar-thumbnail.component.html',
  styleUrls: ['./sidebar-thumbnail.component.css']
})
export class SidebarThumbnailComponent {

  @Input() model: any;

  @Input() index: number;

  @Input() currentSelected: any;

}