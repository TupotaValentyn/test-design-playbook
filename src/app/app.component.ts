import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test-design-playbook';

  // receivedDataArray = [
  //   {
  //     _id: `1a`,
  //     url: `../../asset/p1.svg`,
  //     comment: `it's good`,
  //     marked: false
  //   },
  //   {
  //     _id: `2b`,
  //     url: `../../asset/p2.svg`,
  //     comment: `it's bad`,
  //     marked: false
  //   }
  // ];

  // onReceivedData = new EventEmitter<[
  //   {
  //     _id: string,
  //     url: string,
  //     comment: string,
  //     marked: false
  //   }
  // ]>();


}
