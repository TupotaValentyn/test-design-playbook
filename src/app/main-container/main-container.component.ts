import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent implements OnInit {

  constructor (private http: HttpClient) {

  }

  currentModel:any = [{
    _id: "",
    url: "",
    mark: false,
    comment: ""
  }]
  currentSelectedCount: number = 0;

  ngOnInit() {
    this.http.get('http://localhost:8000/model/all').subscribe(data => {
      this.currentModel = data
      console.log(data)
      this.currentModel.forEach(e => {
        e.url = "../../assets" + e.url
      });
      this.currentSelectModel = this.currentModel[0]
    })
  }

  currentSelectModel = this.currentModel[0];

  testComponentSend() {
    console.log("Sending...");
    this.currentModelLog();
    const sendData = this.currentModel.filter(e => e.mark)
    this.http.post('http://localhost:8000/results/save', {
      models: sendData,
      user: {
        _id: ''
      }
    }).subscribe(t => {
      console.log(t)
    })
  }

  testComponentSave() {
    console.log("Comment's saving...");
    this.currentModelLog();
  }

  testComponentChoose() {
    console.log("Image's choosing...");
    this.currentModelLog();
  }

  sideBarSelect(selectedModel) {
    console.log(this.currentSelectedCount)

    console.log('[MainContainer]', 'sideBarSelect')
    this.currentModelLog()
    this.currentSelectModel = selectedModel
    console.log(this.currentModel.filter(e => e.mark).length)
    setTimeout(() => this.currentSelectedCount = this.currentModel.filter(e => e.mark).length, 0)
  }

  currentModelLog() {
    console.log(this.currentModel);
  }

}
