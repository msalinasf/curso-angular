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
  public project$: Observable<Project>;

  constructor(private projectsService: ProjectsService, activateRoute: ActivatedRoute) {
    this.projectID = parseInt(activateRoute.snapshot.params.id, 10);
  }

  ngOnInit() {
    this.project$ = this.projectsService.getProjectData(this.projectID);
  }

}
