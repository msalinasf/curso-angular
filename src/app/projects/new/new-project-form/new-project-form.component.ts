import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {

  @Output() public projectEmitter = new EventEmitter<Project>();
  public project: Project;

  constructor(private formBuilder: FormBuilder) { }

  public formGroup: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  public saveData() {
    this.projectEmitter.emit(this.formGroup.value);
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
}
