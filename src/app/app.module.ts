import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './components/pages/get-started/get-started.component';
import { MainContainerComponent } from './components/pages/main-container/main-container.component';
import { SidebarThumbnailComponent } from './components/pages/main-container/sidebar/sidebar-thumbnail/sidebar-thumbnail.component';
import { SidebarComponent } from './components/pages/main-container/sidebar/sidebar.component';
import { TestContentComponent } from './components/pages/main-container/test-content/test-content.component';
import { AdminLoginComponent } from './components/pages/admin-login/admin-login.component';
import { FullResultContainerComponent } from './components/pages/full-result-container/full-result-container.component';
import { AdminPanelLinkComponent } from './components/pages/admin-panel-link/admin-panel-link.component';
import { AdminPanelLinkInfoComponent } from './components/pages/admin-panel-link/admin-panel-link-info/admin-panel-link-info.component';

// material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ThxPageComponent } from './components/pages/thx-page/thx-page.component';
import { ResultItemComponent } from './components/pages/full-result-container/result-item/result-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { AdminNavbarComponent } from './components/shared/admin-navbar/admin-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ResultsPageComponent } from './components/pages/results-page/results-page.component';
import { ResultsCardComponent } from './components/pages/results-page/results-card/results-card.component';
import { MatMenuModule } from '@angular/material';
import { TestResultTableComponent } from './components/pages/test-result-table/test-result-table.component';
import { TestResultRowComponent } from './components/pages/test-result-table/test-result-row/test-result-row.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// service
import { JwtInterceptorService } from './components/shared/interceptors/jwt-interceptor.service';
import { ErrorInterceptorService } from './components/shared/interceptors/error-interceptor.service';
import { LinkInfoDialogComponent } from './components/pages/admin-panel-link/admin-panel-link-info/link-info-dialog/link-info-dialog.component';
import { SmthWentWrongComponent } from './components/pages/smth-went-wrong/smth-went-wrong.component';
import { HelpInstructionModalComponent } from './components/pages/main-container/help-instruction-modal/help-instruction-modal.component';
import { ConfirmRemoveComponent } from './components/pages/results-page/results-card/confirm-remove/confirm-remove.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SidebarThumbnailComponent,
    GetStartedComponent,
    ThxPageComponent,
    TestContentComponent,
    SidebarComponent,
    AdminLoginComponent,
    AdminPanelLinkComponent,
    AdminPanelLinkInfoComponent,
    FullResultContainerComponent,
    ResultItemComponent,
    AdminNavbarComponent,
    ResultsPageComponent,
    ResultsCardComponent,
    TestResultTableComponent,
    TestResultRowComponent,
    LinkInfoDialogComponent,
    HelpInstructionModalComponent,
    SmthWentWrongComponent,
    ConfirmRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatBadgeModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  entryComponents: [
    LinkInfoDialogComponent,
    HelpInstructionModalComponent,
    ConfirmRemoveComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
