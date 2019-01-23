import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { MainContainerComponent } from './main-container/main-container.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ThxPageComponent } from './thx-page/thx-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { AdminPanelLinkComponent } from './admin-panel-link/admin-panel-link.component'; 

const routes: Routes = [
  { path: 'main', component: MainContainerComponent },
  { path: '', component: GetStartedComponent },
  { path: 'finish', component: ThxPageComponent },
  { path: 'admin/main', component: ResultsPageComponent },
  { path: 'admin/links', component:  AdminPanelLinkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
