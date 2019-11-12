import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {

  @Input() public projects$: Observable<Project[]>;
  @Output() public deleteAllProjects = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public deleteProjects() {
    this.deleteAllProjects.emit();
  }
}
