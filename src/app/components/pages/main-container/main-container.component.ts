import { Component, OnInit } from '@angular/core';
import { SolvedModel } from '../../shared/models/solved-model';
import { Router } from '@angular/router';
import { DataSourceService } from '../../shared/service/data-source.service';
import { Result } from '../../shared/models/result';
import { environment } from '../../../../environments/environment';

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
    comment: {
      bad: "",
      good: ""
    },
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
        console.log(data);
      });

    this.dataSource.getSolvedModel()
      .subscribe( (data: Result) => {
        if (data && data.solved_models && data.solved_models.length != 0) {
          this.result = data;
          this.giveSavedModels(data);
          console.log(data)
        }
      })
  }

  selectFirstElement() {
    this.currentSelectModel = this.currentModel[0];
    this.currentIndex = 0;
  }

  //saving data to the local storage (used in checkbox's and saveComment functions)
  giveNewModels(data: Result) {
    if (this.currentModel.length <= 1) {
      this.currentModel = data.solved_models;
      this.currentModel.forEach(e => {
        e.model.url = environment.API_DOMAIN + "/layouts?img=" + e.model.url;
      });

      this.selectFirstElement();
    }
  }

  giveSavedModels(data: Result) {
    this.currentModel = data.solved_models;
    this.currentSelectedCount = this.currentModel.filter(e => e.mark).length;
    this.selectFirstElement();
  }

  saveUserTestResult() {
    localStorage.setItem('savedTestResults', JSON.stringify(this.currentModel));

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

  commentSaveGood() {
    this.saveUserTestResult();
  }

  commentSaveBad() {
    this.saveUserTestResult();
  }

  testComponentChoose() { }

  sideBarSelect(selectedModel) {
    this.saveUserTestResult();
    this.currentSelectModel = selectedModel;
    this.currentIndex = this.currentModel.indexOf(selectedModel);

    setTimeout(() => this.currentSelectedCount = this.currentModel.filter(e => e.mark).length, 0);
  }

  //open close sidebar (opended by default)
  opened: boolean = true;

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
