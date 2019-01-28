import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../shared/service/data-source.service';

@Component({
  selector: 'app-admin-panel-link',
  templateUrl: './admin-panel-link.component.html',
  styleUrls: ['./admin-panel-link.component.css']
})
export class AdminPanelLinkComponent implements OnInit{

  constructor (private dataSource: DataSourceService) { }

  usersDateInforArray;
  token = '';
  link = '';


  ngOnInit() {
    this.updateUsersDataArray();
  }

  updateUsersDataArray() {
    this.dataSource.getAllLinks().subscribe(data => {
      this.usersDateInforArray = data;
      console.log(data);
      console.log(this.usersDateInforArray);
    });
  }

  getLink(email, name, surname, secondname) {
    this.dataSource.createLinkForUser(email, name, surname, secondname)
      .subscribe((data: any) => {
        console.log(data);
        if(data.token) {
          console.log(data.token);
          this.token = `/invite/${data.token}`;
          this.link = `http://localhost:4200${this.token}`;
          this.updateUsersDataArray();
        }
        else {
          alert('don\'t have permission')
        }
    });
  }

  sendLink(email, name, surname, secondname, link) {
    const newLink = 'http://localhost:4200' + link;
    this.dataSource.sendMailWithLink(email, name, surname, secondname, link)
      .subscribe((data: any) => {
      console.log(data)
    })
}

  copyLink(target) {
    target.focus();
    target.select();
    document.execCommand('copy');
  }
}
