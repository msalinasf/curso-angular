import { Component, OnInit } from '@angular/core';
// import { environment } from '../../environments/environment';
import { ProjectsService } from '../projects/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public projects$: Observable<any> = null;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects$ = this.projectsService.getAllData();
  }

}
