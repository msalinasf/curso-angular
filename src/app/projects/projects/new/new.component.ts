import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

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

    this.numProjects = this.projects.length;

  }

  public createProject() {
    this.projects.push(this.project);
  }

}
