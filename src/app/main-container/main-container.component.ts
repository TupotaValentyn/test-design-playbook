import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent implements OnInit {

  constructor (private http: HttpClient) { }

  currentModel: any = [{
    _id: "",
    url: "../../assets/empty-img.png",
    mark: false,
    comment: 'Nothing found',
    name: "Nothing found"
  },
  {
    _id: "",
    url: "../../assets/empty-img.png",
    mark: false,
    comment: 'Nothing found',
    name: "Nothing found"
  }];
  currentSelectedCount: number = 0;

  ngOnInit() {
    this.http.get(
      'http://localhost:8000/model/all',
      ).subscribe(data => {
        this.currentModel = data;
        console.log(data);
        this.currentModel.forEach(e => {
          e.url = "../../assets" + e.url
        });
        this.currentSelectModel = this.currentModel[0];
      });
    
    //take user date from local storage if exist
    if (localStorage.getItem('savedTestResults')) {
      this.currentModel = JSON.parse( localStorage.getItem('savedTestResults') );
    }
    //setting first element of test after defining existing localStorageDate
    this.currentSelectModel = this.currentModel[0];

  }

  currentSelectModel: Object;


  //saving data to the local storage (used in checkbox's and saveComment functions)
  saveUserTestResult() {
    console.log('IMAGE CHOOSEN', this.currentModel);
    localStorage.setItem('savedTestResults', JSON.stringify(this.currentModel));
  }

  testComponentSend() {
    console.log("Sending...");
    this.currentModelLog();
    const sendData = this.currentModel;

    this.http.post(
      'http://localhost:8000/results/save',
      { models: sendData },
      ).subscribe(data => {
      console.log(data)
    })
  }

  testComponentSave() {
    this.saveUserTestResult();
  }

  testComponentChoose() {
    this.currentModelLog();
  }

  sideBarSelect(selectedModel) {
    this.saveUserTestResult();

    console.log(this.currentSelectedCount);

    console.log('[MainContainer]', 'sideBarSelect');
    this.currentModelLog();
    this.currentSelectModel = selectedModel;
    console.log(this.currentModel.filter(e => e.mark).length);
    setTimeout(() => this.currentSelectedCount = this.currentModel.filter(e => e.mark).length, 0);
  }

  currentModelLog() {
    console.log(this.currentModel);
  }

}
