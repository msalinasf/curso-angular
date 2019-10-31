import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { NewComponent } from './new/new.component';
import { ViewerComponent } from './viewer/viewer.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'view/:id',
    component: ViewerComponent
  },
  {
    path: 'new',
    component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
