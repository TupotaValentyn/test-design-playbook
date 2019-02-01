import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSourceService } from '../../shared/service/data-source.service';
import { Applicant } from '../../shared/models/applicant';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {

  token: string;
  applicant: Applicant = new Applicant();

  constructor(private route: ActivatedRoute, private dataSource: DataSourceService) {
    this.token = this.route.snapshot.paramMap.get('token');
    if (this.token) {
      document.cookie = `token=${this.token}; path=/`;
      localStorage.setItem('token', this.token);
    } else if (!localStorage.getItem('token')) {
      alert('You don`t have permission');
    }
    this.dataSource.getApplicantInfo(this.token)
    .subscribe((applicant: Applicant) => {
      this.applicant = applicant;
    });
  }

}
