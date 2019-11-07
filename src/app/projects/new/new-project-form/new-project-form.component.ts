import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {

  @Output() public projectEmitter = new EventEmitter<Project>();
  public project: Project;

  constructor() { }

  ngOnInit() {
    this.project = {
      id: null,
      name: ''
    };
  }

  public saveData() {
    this.projectEmitter.emit(this.project);
  }
}
