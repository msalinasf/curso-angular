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
  public formGroup: FormGroup;
  public errorID: string = 'hidden';


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      if (control.errors.required) {
        error = 'El valor es obligatorio';
      } else if (control.errors.minlength) {
        error = 'La longitud mínima es de 2';
      } else {
        error = JSON.stringify(control.errors);
      }
    }
    return error;
  }

  public saveData() {
    this.projectEmitter.emit(this.formGroup.value);
  }

}
