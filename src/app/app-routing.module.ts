import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacexLaunchProgramsComponent } from './components/spacex-launch-programs/spacex-launch-programs.component';

const routes: Routes = [
  {
     path: '',
     component: SpacexLaunchProgramsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
