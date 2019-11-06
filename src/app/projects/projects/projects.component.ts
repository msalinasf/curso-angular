import { Component, OnInit } from '@angular/core';
import { Project } from './../models/project.model';
import { ProjectsService } from '../projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  // public projects: Project[];
  public projects$: Observable<any> = null;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projects$ = this.projectsService.getAllData();
    // this.projects$ = this.projectsService.projects$;
  }


}

