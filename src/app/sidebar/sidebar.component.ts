import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() models: any;
  @Output() onSelect = new EventEmitter<any>();

  onSelectElement(data) {
    this.onSelect.emit(data);
  }

}
