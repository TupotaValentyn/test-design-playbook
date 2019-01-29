import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-result-row',
  templateUrl: './test-result-row.component.html',
  styleUrls: ['./test-result-row.component.css']
})
export class TestResultRowComponent {

  @Input() index: number;
  @Input() userDataItem: any;

  constructor() { }

  //checking comments for null and spaced
  isNotEmptyOrSpaces(str){
    return !(str === null || str.match(/^ *$/) !== null);
  }

}