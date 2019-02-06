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

  changePassword(oldPassword: string, newPassword: string, confirmPassword: string): void {
    if (newPassword !== confirmPassword) {
      this.snackBar.open('Password confirmation doesn\'t match the password', 'Close', { duration: 1000 });
      return;
    }
    this.dataSource.changePassword(oldPassword, newPassword)
      .subscribe((data) => {
      this.snackBar.open('Password change successful', 'Close', { duration: 1000 });
    });

  }

}
