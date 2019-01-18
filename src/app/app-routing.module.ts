import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { MainContainerComponent } from './main-container/main-container.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  { path: 'main', component: MainContainerComponent },
  { path: '', component: GetStartedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  showData(txt: string) {
    console.log(txt);
  }

}
