import { Component, Input } from '@angular/core';
import {SolvedModel} from '../../../../shared/models/solved-model';

@Component({
  selector: 'app-sidebar-thumbnail',
  templateUrl: './sidebar-thumbnail.component.html',
  styleUrls: ['./sidebar-thumbnail.component.css']
})
export class SidebarThumbnailComponent {

  @Input() model: SolvedModel;

  @Input() index: number;

  @Input() currentSelected: SolvedModel;

}
