import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../shared/service/data-source.service';
import { Result } from '../../shared/models/result';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archive: any
  isLoadedContent = false
  constructor(private dataSource: DataSourceService) { }

  ngOnInit() {
    this.dataSource.getAllArchiveResults().subscribe(allResults => {
      this.archive = allResults
      console.log(this.archive)
    }, err => {
      console.log(err)
    })
  }

  updateCardAfterDelete() {
    this.dataSource.getAllArchiveResults().subscribe(allResults => {
      this.archive = allResults
      console.log(this.archive)
    }, err => {
      console.log(err)
    })
  }



}
