import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SidebarThumbnailComponent } from './sidebar-thumbnail/sidebar-thumbnail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestContentComponent } from './test-content/test-content.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

// material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ThxPageComponent } from './thx-page/thx-page.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AdminPanelLinkComponent } from './admin-panel-link/admin-panel-link.component';
import { AdminPanelLinkInfoComponent } from './admin-panel-link-info/admin-panel-link-info.component';
import { MatListModule } from '@angular/material';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ResultsCardComponent } from './results-card/results-card.component';
import { MatMenuModule } from '@angular/material';

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
    AdminNavbarComponent,
    ResultsPageComponent,
    ResultsCardComponent
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
    MatToolbarModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
