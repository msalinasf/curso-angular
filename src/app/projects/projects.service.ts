import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // public projects: Project[];
  public projects: any = null;
  private urlapi = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {

    // this.projects = environment.projects;
    // this.getAllData();

  }

  public getAllData() {
    this.httpClient.get(this.urlapi).subscribe(apiData => (this.projects = apiData));
    return this.projects;
  }

  public getProjectData(projectID: number) {

    return this.projects[this.projects.map((element) => {
      return element.id;
    }).indexOf(projectID)];

  }

  public CreateProject(project: Project) {

    // this.projects.push({ ...project });
    this.httpClient.post(this.urlapi, project).subscribe();
    // environment.projects = this.projects;

  }

}
