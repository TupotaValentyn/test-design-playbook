import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../shared/service/data-source.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  data:any
  constructor(private dataSource: DataSourceService) { }

  ngOnInit() {
    this.dataSource.getAllArchiveResults().subscribe(allResults => {
      console.log(allResults)
    }, err => {
      console.log(err)
    })
  }



}
