import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../models/result';

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.css']
})
export class ResultsCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input() result_item: Result;
  @Input() index: number;

}
