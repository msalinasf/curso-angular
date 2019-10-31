import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styles: []
})
export class ViewerComponent implements OnInit {

  public projectID: number;
  public project: Project;
  public projects: Project[];

  constructor(activateRoute: ActivatedRoute) {
    this.projectID = activateRoute.snapshot.params.id;
    this.projects = environment.projects;
    this.project = this.projects[this.projects.map((element) => element.id).indexOf(this.projectID)];
  }

  ngOnInit() {
  }

}
