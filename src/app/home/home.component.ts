import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private projects = environment.projects;
  public numProjects: number;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {

    this.numProjects = this.projects.length;

  }

}
