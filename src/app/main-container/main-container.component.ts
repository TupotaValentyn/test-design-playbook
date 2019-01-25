import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolvedModel } from '../models/solved-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent implements OnInit {

  constructor (private http: HttpClient, private route: Router) { }

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
    if(!localStorage.getItem('savedTestResults')) {
      this.http.get(
        'http://localhost:8000/model/all',
        ).subscribe(data => {
          this.currentModel = data;
          console.log(data);
          this.currentModel.forEach(e => {
          e.url = "../../assets" + e.url
        });
        //need to check
        this.currentSelectModel = this.currentModel[0];
      });
    }

    //take user date from local storage if exist
    if (localStorage.getItem('savedTestResults')) {
      this.currentModel = JSON.parse( localStorage.getItem('savedTestResults') );
      this.currentSelectedCount = this.currentModel.filter(e => e.mark).length;
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
    const solvedResults: Array<SolvedModel> = sendData.map(item => ({
      model: {
        _id: item._id,
        url: item.url,
        answer: false,
        name: item.name
      },
      mark: item.mark,
      comment: item.comment
    }));

    this.http.post(
      'http://localhost:8000/results/update',
      { models: solvedResults }
      ).subscribe(data => {
      this.route.navigate(['/result/table'])
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
