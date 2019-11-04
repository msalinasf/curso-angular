import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerComponent } from './viewer/viewer.component';
import { NewComponent } from './new/new.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ViewerProjectFormComponent } from './viewer/viewer-project-form/viewer-project-form.component';
import { NewProjectFormComponent } from './new/new-project-form/new-project-form.component';


@NgModule({
  declarations: [ProjectsComponent, ViewerComponent, NewComponent, FilterProjectsFormComponent, ProjectsListComponent, ViewerProjectFormComponent, NewProjectFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
