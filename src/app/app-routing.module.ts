import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { MainContainerComponent } from './main-container/main-container.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ThxPageComponent } from './thx-page/thx-page.component'

const routes: Routes = [
  { path: 'main', component: MainContainerComponent },
  { path: '', component: GetStartedComponent },
  { path: 'finish', component: ThxPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
