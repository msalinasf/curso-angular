import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {

  @Input() public projects: Project[];
  @Input() public string: string;
  @Output() public projectEmitter = new EventEmitter<Project>();
  public project: Project;

  constructor() { }

  ngOnInit() {

    this.project = {
      id: this.projects.length,
      name: ''
    };

  }

  public saveData() {
    this.projectEmitter.emit(this.project);
  }
}
