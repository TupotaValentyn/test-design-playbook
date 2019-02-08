import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { MainContainerComponent } from './components/pages/main-container/main-container.component';
import { GetStartedComponent } from './components/pages/get-started/get-started.component';
import { ThxPageComponent } from './components/pages/thx-page/thx-page.component';
import { ResultsPageComponent } from './components/pages/results-page/results-page.component';
import { AdminPanelLinkComponent } from './components/pages/admin-panel-link/admin-panel-link.component';
import { FullResultContainerComponent } from './components/pages/full-result-container/full-result-container.component';
import { AdminLoginComponent } from './components/pages/admin-login/admin-login.component';
import { TestResultTableComponent } from './components/pages/test-result-table/test-result-table.component';
import { SmthWentWrongComponent } from './components/pages/smth-went-wrong/smth-went-wrong.component';
import { ArchiveComponent } from '../app/components/pages/archive/archive.component';
import { AdminSettingsComponent } from './components/pages/admin-settings/admin-settings.component';

const routes: Routes = [
  { path: 'main', component: MainContainerComponent },
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
  { path: 'invite/:token', component: GetStartedComponent },
  { path: 'error', component: SmthWentWrongComponent },
  { path: 'result/table', component: TestResultTableComponent },
  { path: 'finish', component: ThxPageComponent },
  { path: 'admin/results', component: ResultsPageComponent },
  { path: 'admin/results/full/:token', component: FullResultContainerComponent },
  { path: 'admin/links', component: AdminPanelLinkComponent },
  { path: 'admin/archive', component: ArchiveComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/settings', component: AdminSettingsComponent },
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
