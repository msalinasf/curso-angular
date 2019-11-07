import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-viewer-project-form',
  templateUrl: './viewer-project-form.component.html',
  styles: []
})
export class ViewerProjectFormComponent implements OnInit {

  @Input() public project: Project;
  @Input() public projectID: number;
  // @Input() public project2: any;

  constructor() { }

  ngOnInit() {
  }

}
