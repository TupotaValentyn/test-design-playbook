import { Component, Input, AfterContentInit } from '@angular/core';
import { SolvedModel } from '../../../shared/models/solved-model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})

export class ResultItemComponent implements AfterContentInit {

  @Input() index: number;
  @Input() item: SolvedModel;
  
  ngAfterContentInit() {
    console.log('showItem', this.item);
  }

}
