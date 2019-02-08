import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSourceService } from '../../shared/service/data-source.service';
import { Applicant } from '../../shared/models/applicant';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  token: string;
  applicant: Applicant = new Applicant();
  templatesCount: number; 

  ngOnInit() {

    this.dataSource.getApplicantInfo(this.token)
    .subscribe((applicant: Applicant) => {
      this.applicant = applicant;
    });
    
    this.dataSource.getTotalAmount()
    .subscribe((data: {count: number}) => {
      this.templatesCount = data.count;
    }); 

  }

  constructor(private route: ActivatedRoute, private dataSource: DataSourceService) {
    this.token = this.route.snapshot.paramMap.get('token');
    if (this.token) {
      document.cookie = `token=${this.token}; path=/`;
      localStorage.setItem('token', this.token);
    } else if (!localStorage.getItem('token')) {
      alert('You don`t have permission');
    }
  }

}
