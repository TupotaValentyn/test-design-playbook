import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() models: any;
  @Output() onSelect = new EventEmitter<any>();

  markCoosenThumbnail(e) {
    console.log();
  }

  selectedModel

  ngOnInit() {
    this.selectedModel = this.models[0];
  }

  isSelectedThumbnail(model) {
    return this.selectedModel === model;
  }

  onSelectElement(model) {
    this.selectedModel = model; 
    this.onSelect.emit(model);
    console.log(this.selectedModel)
  }


}
