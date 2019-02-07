import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataSourceService } from '../../shared/service/data-source.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent {

  constructor(private snackBar: MatSnackBar, private dataSource: DataSourceService) { }

  changePassword(oldPassword: HTMLInputElement, newPassword: HTMLInputElement, confirmPassword: HTMLInputElement): void {
    if (newPassword.value !== confirmPassword.value) {
      this.snackBar.open('Password confirmation doesn\'t match the password', 'Close', { duration: 1000 });
      return;
    }
    this.dataSource.changePassword(oldPassword.value, newPassword.value)
      .subscribe((data) => {
        oldPassword.value = "";
        newPassword.value = "";
        confirmPassword.value = "";
        this.snackBar.open('Password change successful', 'Close', { duration: 1000 });
    });
  }

}
