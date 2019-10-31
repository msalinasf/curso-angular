import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: []
})
export class NewComponent implements OnInit {

  public project: Project;
  public projects: Project[];
  public numProjects: number;

  constructor() { }

  ngOnInit() {
    this.projects = environment.projects;
    this.numProjects = this.projects.length;

    this.project = {
      id: this.numProjects,
      name: ''
    };

  }

  public createProject() {
    this.projects.push({ ...this.project });
    environment.projects = this.projects;
  }

}
