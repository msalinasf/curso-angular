import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public projects: Project[];

  constructor() {

    this.projects = environment.projects;

  }

  public getProjectData(projectID: number) {

    return this.projects[this.projects.map((element) => {
      return element.id;
    }).indexOf(projectID)];

  }

  public CreateProject(project: Project) {

    this.projects.push({ ...project });
    // environment.projects = this.projects;

  }

}
