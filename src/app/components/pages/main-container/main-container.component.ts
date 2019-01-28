import { Component, OnInit } from '@angular/core';
import { SolvedModel } from '../../shared/models/solved-model';
import { Router } from '@angular/router';
import { DataSourceService } from '../../shared/service/data-source.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent implements OnInit {

  constructor (private dataSource: DataSourceService, private route: Router) { }

  //test model
  currentModel: any = [{
    _id: "test1",
    url: "../../assets/empty-img.png",
    mark: false,
    comment_good: "Nothing found comment good",
    comment_bad: "Nothing found comment bad",
    name: "Nothing found name"
  },
  {
    _id: "test2",
    url: "../../assets/empty-img.png",
    mark: false,
    comment_good: "Nothing found comment good",
    comment_bad: "Nothing found comment bad",
    name: "Nothing found name"
  }];
  currentSelectedCount: number = 0;

  ngOnInit() {
    if(!localStorage.getItem('savedTestResults')) {
      this.dataSource.getAllModels()
        .subscribe(data => {
          this.currentModel = data;
          console.log(data);
          this.currentModel.forEach(e => {
          e.url = "../../assets" + e.url;
          e.bad_comment = "";
          e.good_comment = "";
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
      // comment: item.comment,
      bad_comment: item.bad_comment,
      good_comment: item.good_comment
    }));

    // this doesn't work, that's why I used next thing
    // this.dataSource.updateResult(solvedResults).subscribe(() => {
    //   this.route.navigate(['/result/table']);
    // })
    this.route.navigate(['/result/table']);
  }

  // just a test
  // testComponentSave() {
  //   this.saveUserTestResult();
  // }

  commentSaveGood() {
    this.saveUserTestResult();
  }

  commentSaveBad() {
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