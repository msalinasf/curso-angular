import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: []
})
export class NewComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
  }

  public createProject(project: Project) {
    this.projectsService.CreateProject(project);
  }

}
