import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../shared/service/data-source.service';
import { Applicant } from '../../shared/models/applicant';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-panel-link',
  templateUrl: './admin-panel-link.component.html',
  styleUrls: ['./admin-panel-link.component.css']
})
export class AdminPanelLinkComponent implements OnInit {

  fullDomain = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '');

  constructor (private dataSource: DataSourceService) { }

  userDataInfoList: Array<Applicant> = [];
  token = '';
  link = '';
  isAllLinkLoaded: boolean = false;

  ngOnInit() {
    this.updateUsersDataList();
  }

  updateUsersDataList() {
    this.dataSource.getAllLinks()
      .subscribe((data: Array<Applicant>) => {
        this.userDataInfoList = data;
        console.log(data);
        this.isAllLinkLoaded = true;
      });
  }

  onSubmit(form: NgForm) {
    this.getLink(
      form.value.email,
      form.value.firstName,
      form.value.surname,
      form.value.secondName
    );
  }

  getLink(email, name, surname, secondname) {
    this.dataSource.createLinkForUser(email, name, surname, secondname)
      .subscribe((data: any) => {
        console.log(data);
        if (data.token) {
          console.log(data.token);
          this.token = `/invite/${data.token}`;
          this.link = `${this.fullDomain}${this.token}`;
          this.updateUsersDataList();
        } else {
          alert('don\'t have permission');
        }
      });
  }

  sendLink(email, name, surname, secondname, link) {
    const newLink = this.fullDomain + link;
    this.dataSource.sendMailWithLink(email, name, surname, secondname, newLink)
      .subscribe((data: any) => {
      console.log(data);
    });
}

  copyLink(target) {
    target.focus();
    target.select();
    document.execCommand('copy');
  }
}
