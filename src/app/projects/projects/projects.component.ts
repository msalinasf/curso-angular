import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from './../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];

  constructor() { }

  ngOnInit() {

    this.projects = environment.projects;

  }


}

