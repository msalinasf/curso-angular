import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, share, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // public projects: any = null;
  private urlapi = 'https://api-base.herokuapp.com/api/pub/projects';
  public projects$: Observable<Project[]>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.projects$ = this.getAllData();
  }

  public deleteProjects() {
    return this.httpClient
        .delete<Project[]>(this.urlapi);
  }

  private getAllData() {
    return this.httpClient.get<Project[]>(this.urlapi).pipe(map(this.transformData), share());
  }

  public getProjectData(projectID: any) {
    return this.projects$.pipe(map(pr => pr[projectID]));
  }

  public CreateProject(project: Project) {
    this.httpClient
        .post(this.urlapi, project)
        .subscribe(response => { this.router.navigate(['/projects']); });
  }

  public searchProject(value: string) {
    return this.projects$.pipe(map(pr => {return Object.values(pr).filter(p => p.name.includes(value))}));
  }

  private transformData(serverValues) {
    if (serverValues !== null) {
      return Object.keys(serverValues).map(key => ({
        id: serverValues[key].id,
        name: serverValues[key].name,
      }));
    } else {
      return [];
    }

  }

}
