import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {SolvedModel} from '../../../shared/models/solved-model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() models: Array<SolvedModel>;
  @Output() onSelect = new EventEmitter<SolvedModel>();

  @Input() currentSelectedModel: SolvedModel;

  selectedModel: SolvedModel;

  ngOnInit() {
    this.selectedModel = this.models[0];
  }

  onSelectElement(model) {
    this.selectedModel = model;
    this.onSelect.emit(model);
  }

}
