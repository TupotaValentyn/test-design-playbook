import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent {

  currentModel = {
    _id: "",
    url: "",
    comment: "",
    mark: false
  }

  testComponentSend() {
    console.log("Sending...");
  }

  testComponentSave() {
    console.log("Comment's saving...");
  }

  testComponentChoose() {
    console.log("Image's choosing...");
  }

}
