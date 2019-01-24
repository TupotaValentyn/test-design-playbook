import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { MainContainerComponent } from './main-container/main-container.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ThxPageComponent } from './thx-page/thx-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { AdminPanelLinkComponent } from './admin-panel-link/admin-panel-link.component';
import { FullResultContainerComponent } from './full-result-container/full-result-container.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';

const routes: Routes = [
  { path: 'main', component: MainContainerComponent },
  { path: '', component: GetStartedComponent },
  { path: 'invite/:token', component: GetStartedComponent },
  { path: 'finish', component: ThxPageComponent },
  { path: 'admin/results', component: ResultsPageComponent },
  { path: 'admin/results/full', component: FullResultContainerComponent },
  { path: 'admin/links', component: AdminPanelLinkComponent },
  { path: 'admin/login', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
