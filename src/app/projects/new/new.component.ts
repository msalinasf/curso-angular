import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from '../../../environments/environment';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: []
})
export class NewComponent implements OnInit {

  public projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = environment.projects;
  }

  public createProject(project: Project) {

    this.projectsService.CreateProject(project);
  }

}
