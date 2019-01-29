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
    this.dataSource.getAllModels()
      .subscribe(data => {
        if(!data['token']) {
          this.giveNewModels(data)
        } else {
          this.giveSavedModels(data)
        }});

    //take user date from local storage if exist
    // if (localStorage.getItem('savedTestResults')) {
    //   this.currentModel = JSON.parse( localStorage.getItem('savedTestResults') );
    //   this.currentSelectedCount = this.currentModel.filter(e => e.mark).length;
    // }
    // //setting first element of test after defining existing localStorageDate
    // this.currentSelectModel = this.currentModel[0];

  }

  currentSelectModel: Object;
  currentIndex: number;


  //saving data to the local storage (used in checkbox's and saveComment functions)
  giveNewModels(data) {
    this.currentModel = data;
    console.log(data);
    this.currentModel.forEach(e => {
      e.url = "../../assets" + e.url
    });
    this.currentSelectModel = this.currentModel[0];
    this.currentIndex = 0;
  }

  giveSavedModels(data) {
    this.currentModel = data['solved_models'].map((item) => (
      {_id: item.model._id, url: item.model.url, mark: item.mark, comment: item.comment,})
    );
    this.currentSelectedCount = this.currentModel.filter(e => e.mark).length;
    this.currentSelectModel = this.currentModel[0];
    this.currentIndex = 0;
  }

  saveUserTestResult() {
    console.log('IMAGE CHOOSEN', this.currentModel);
    localStorage.setItem('savedTestResults', JSON.stringify(this.currentModel));
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

    this.dataSource.updateResult(solvedResults).subscribe(() => {})

  }

  testComponentSend() {
    console.log("Sending...");
    this.currentModelLog();
    localStorage.setItem('savedTestResults', JSON.stringify(this.currentModel));
    const sendData = this.currentModel;
    console.log(this.currentModel);
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

    this.dataSource.updateResult(solvedResults).subscribe(() => {
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
    this.currentIndex = this.currentModel.indexOf(selectedModel);

    console.log(this.currentModel.filter(e => e.mark).length);
    setTimeout(() => this.currentSelectedCount = this.currentModel.filter(e => e.mark).length, 0);
  }

  currentModelLog() {
    console.log(this.currentModel);
  }

  nextImg() {
    if (this.currentIndex === (this.currentModel.length - 1)) {
      console.log("Index more than the index of last image");
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }

    this.currentSelectModel = this.currentModel[this.currentIndex];
  }

  prevImg() {
    if (this.currentIndex === 0) {
      console.log("Index less than the index of first image");
      this.currentIndex = (this.currentModel.length - 1);
    } else {
      this.currentIndex = this.currentIndex - 1;
    }

    this.currentSelectModel = this.currentModel[this.currentIndex];
  }

}
