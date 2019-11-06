import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // public projects: Project[];
  public projects: any = null;
  private urlapi = 'https://api-base.herokuapp.com/api/pub/projects';

  public projects$: Observable<any> = null;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getAllData() {
    return this.httpClient
               .get<any>(this.urlapi);
  }

  public getProjectData(projectID: any) {

    return this.getAllData().pipe(tap(pr => console.log(pr)));

    /* return this.projects[this.projects.map((element) => {
      return element.id;
    }).indexOf(projectID)]; */

  }

  public CreateProject(project: Project) {
    this.httpClient
        .post(this.urlapi, project)
        .subscribe(response => { this.router.navigate(['/projects']); });
  }

}
