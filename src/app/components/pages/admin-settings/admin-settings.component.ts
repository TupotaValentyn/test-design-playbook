import {Component, Input, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataSourceService } from '../../shared/service/data-source.service';
import { Employer } from '../../shared/models/employer';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {

  public MENU_PROFILE = 1;
  public MENU_SECURITY = 2;
  public MENU_EMAIL = 3;
  public MENU_NOTIFY = 4;

  @Input() employer: Employer = new Employer();

  public currentMenus: Number = this.MENU_PROFILE;

  constructor(private snackBar: MatSnackBar, private dataSource: DataSourceService) { }

  ngOnInit(): void {
    this.getEmployerInfo();
  }

  changePassword(oldPassword: HTMLInputElement, newPassword: HTMLInputElement, confirmPassword: HTMLInputElement): void {
    if (newPassword.value !== confirmPassword.value) {
      this.snackBar.open('Password confirmation doesn\'t match the password', 'Close', { duration: 1000 });
      return;
    }
    this.dataSource.changePassword(oldPassword.value, newPassword.value)
      .subscribe(() => {
        oldPassword.value = "";
        newPassword.value = "";
        confirmPassword.value = "";
        this.snackBar.open('Password change successful', 'Close', { duration: 1000 });
    });
  }

  changeEmail(mail: HTMLInputElement): void {
    const mailLine = mail.value;
    if (AdminSettingsComponent.validateEmail(mailLine)) {
      this.dataSource.changeEmail(mailLine)
        .subscribe(() => {
          this.snackBar.open('Change successful', 'Close', { duration: 2000 });
          this.getEmployerInfo();
        });
      mail.value = "";
    } else {
      this.snackBar.open('E-Mail is invalid', 'Close', { duration: 2000 });
    }
  }

  getEmployerInfo(): void {
    this.dataSource.getEmployerInfo().subscribe((value: Employer) => {
      this.employer = value;
    });
  }


  static validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



  openProfile() {
    this.currentMenus = this.MENU_PROFILE;
  }

  openSecurity() {
    this.currentMenus = this.MENU_SECURITY;
  }

  openEmail() {
    this.currentMenus = this.MENU_EMAIL;
  }

  openNotification() {
    this.currentMenus = this.MENU_NOTIFY;
  }

  subscribeToNotify(): void {
    this.dataSource.setNotification(true).subscribe(() => {
      this.snackBar.open('You subscribe successful', 'Close', { duration: 2000 });
      this.getEmployerInfo();
    })
  }

  unsubscribeFromNotify(): void {
    this.dataSource.setNotification(false).subscribe(() => {
      this.snackBar.open('You unsubscribe successful', 'Close', { duration: 2000 });
      this.getEmployerInfo();
    })
  }


}
