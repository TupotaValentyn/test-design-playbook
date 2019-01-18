import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent {

  currentModel = [{
    _id: "a",
    url: "../../assets/models/bad_template_1.svg",
    comment: "",
    mark: false
  },
  {
    _id: "b",
    url: "../../assets/models/bad_template_2.svg",
    comment: "",
    mark: false
  },
  {
    _id: "c",
    url: "../../assets/models/bad_template_3.svg",
    comment: "",
    mark: false
  }]

  testComponentSend() {
    console.log("Sending...");
    this.currentModelLog();
  }

  testComponentSave() {
    console.log("Comment's saving...");
    this.currentModelLog();
  }

  testComponentChoose() {
    console.log("Image's choosing...");
    this.currentModelLog();
  }

  sideBarSelect() {
    console.log('[MainContainer]', 'sideBarSelect');
    this.currentModelLog();
  }

  currentModelLog() {
    console.log(this.currentModel);
    
  }

}
