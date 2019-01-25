import { Component, Input } from '@angular/core';
import { SolvedModel } from '../models/solved-model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})

export class ResultItemComponent {

  @Input() index: number;
  @Input() item: SolvedModel;

}
