import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';
import { Observable, pipe } from 'rxjs';
import { map, tap, filter, share } from 'rxjs/operators';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styles: []
})
export class ViewerComponent implements OnInit {

  public projectID: number;
  // public projects$: Observable<any>;
  public project$: Observable<any>;
  public project: Project;
  public projects: Project[];

  constructor(private projectsService: ProjectsService, activateRoute: ActivatedRoute) {
    this.projectID = parseInt(activateRoute.snapshot.params.id, 10);
    // this.project$ = this.projectsService.getProjectData(this.projectID);
    /* this.project$ = this.projectsService.getAllData()
      .pipe(tap(pr => console.log(pr)), filter(pr => pr.id === 1), tap(pr => console.log(pr))); */
    // this.projects$ = this.projectsService.getAllData().pipe(share());
    // this.project$ = this.projects$.pipe(tap(pr => console.log(pr)), filter(pr => pr > 0), tap(pr => console.log(pr)));
    this.project$ = this.projectsService.getAllData()
                      .pipe(map(pr => Object.values(pr).map(p => {console.log(p); if (p.id === this.projectID) {this.project = p}})));
  }

  ngOnInit() {
  }

  /* public getProject(data) {
    return Object.values(data).map(value => { if (value.id === this.projectID) { return value; } } );
  } */

}
