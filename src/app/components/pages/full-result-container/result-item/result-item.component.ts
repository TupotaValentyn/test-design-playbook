import { Component, Input, OnInit } from '@angular/core';
import { SolvedModel } from '../../../shared/models/solved-model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})

export class ResultItemComponent implements  OnInit{

  @Input() index: number;
  @Input() item: SolvedModel;
  
  goodComment = '';
  badComment = '';

  ngOnInit() {
    console.log(this.item);
    this.goodComment = this.item.comment.good
    this.badComment = this.item.comment.bad

  }

}
