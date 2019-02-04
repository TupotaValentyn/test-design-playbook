import { Component, Input, Output, EventEmitter } from '@angular/core';
import {SolvedModel} from '../../../shared/models/solved-model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() models: Array<SolvedModel>;
  @Output() onSelect = new EventEmitter<SolvedModel>();

  @Input() currentSelectedModel: SolvedModel;

  onSelectElement(model) {
    this.currentSelectedModel = model;
    this.onSelect.emit(model);
  }

}