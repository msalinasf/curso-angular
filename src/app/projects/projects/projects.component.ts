import { Component, OnInit } from '@angular/core';
import { Project } from './../models/project.model';
import { ProjectsService } from '../projects.service';
import { Observable } from 'rxjs';
import { NotificationsStoreService } from 'src/app/notifications/notifications-store.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  // public projects: Project[];
  public projects$: Observable<Project[]> = null;

  public notes$;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projects$ = this.projectsService.projects$;
  }


}

