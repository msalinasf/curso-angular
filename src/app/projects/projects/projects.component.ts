import { Component, OnInit } from '@angular/core';
import { Project } from './../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {

    this.projects = this.projectsService.getAllData();

  }


}

