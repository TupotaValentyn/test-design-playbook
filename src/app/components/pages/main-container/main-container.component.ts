import {Component, OnInit} from '@angular/core';
import {SolvedModel} from '../../shared/models/solved-model';
import {Router} from '@angular/router';
import {DataSourceService} from '../../shared/service/data-source.service';
import {Result} from '../../shared/models/result';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent implements OnInit {

  constructor (private dataSource: DataSourceService, private route: Router) { }

  result: Result;
  currentModel: Array<SolvedModel> = [{
    model: {
      _id: "",
      url: "../../assets/empty-img.png",
      name: "Empty",
      answer: false
    },
    comment: 'Nothing found',
    mark: false
  }];

  currentSelectModel: SolvedModel = this.currentModel[0];
  currentIndex: number;
  currentSelectedCount: number = 0;

  ngOnInit() {
    this.dataSource.getAllModelsNew()
      .subscribe((data: Result) => {
        this.result = data;
        this.giveNewModels(data);
      });

    this.dataSource.getSolvedModel()
      .subscribe( (data: Result) => {
        if (data && data.solved_models && data.solved_models.length != 0) {
          this.result = data;
          this.giveSavedModels(data)
        }
      })

    //take user date from local storage if exist
    // if (localStorage.getItem('savedTestResults')) {
    //   this.currentModel = JSON.parse( localStorage.getItem('savedTestResults') );
    //   this.currentSelectedCount = this.currentModel.filter(e => e.mark).length;
    // }
    // //setting first element of test after defining existing localStorageDate
    // this.currentSelectModel = this.currentModel[0];

  }

  selectFirstElement() {
    this.currentSelectModel = this.currentModel[0];
    this.currentIndex = 0;
  }

  //saving data to the local storage (used in checkbox's and saveComment functions)
  giveNewModels(data: Result) {
    this.currentModel = data.solved_models;

    this.currentModel.forEach(e => {
      e.model.url = "../../assets" + e.model.url;
    });

    this.selectFirstElement();
  }

  giveSavedModels(data: Result) {
    this.currentModel = data.solved_models;
    this.currentSelectedCount = this.currentModel.filter(e => e.mark).length;
    this.selectFirstElement();
  }

  saveUserTestResult() {
    console.log('IMAGE CHOOSEN', this.currentModel);
    localStorage.setItem('savedTestResults', JSON.stringify(this.currentModel));
    console.log("Sending...");

    this.currentModelLog();
    const sendData: Array<SolvedModel> = this.currentModel;

    this.dataSource.updateResult(sendData).subscribe(() => {})
  }

  testComponentSend() {
    console.log("Sending...");
    this.currentModelLog();
    localStorage.setItem('savedTestResults', JSON.stringify(this.currentModel));
    const sendData = this.currentModel;
    console.log(this.currentModel);

    this.dataSource.updateResult(sendData).subscribe(() => {
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
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    this.currentSelectModel = this.currentModel[this.currentIndex];
  }

  prevImg() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.currentModel.length - 1;
    } else {
      this.currentIndex--;
    }

    this.currentSelectModel = this.currentModel[this.currentIndex];
  }

}
