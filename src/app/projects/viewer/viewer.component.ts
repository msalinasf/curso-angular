import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styles: []
})
export class ViewerComponent implements OnInit {

  public projectID: number;
  public project: Project;
  public projects: Project[];

  constructor(private projectsService: ProjectsService, activateRoute: ActivatedRoute) {
    this.projectID = parseInt(activateRoute.snapshot.params.id, 10);
    this.project = this.projectsService.getProjectData(this.projectID);
  }

  ngOnInit() {
  }

}
