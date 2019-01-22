import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})

export class ResultItemComponent implements OnInit {

  @Input() index: number;
  @Input() item: any;

  value: string;

  constructor() {
  }

  ngOnInit() {
    this.value = this.item.mark ? "User liked it!" : "User disliked it!";
  }

}
