import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styles: []
})
export class FilterProjectsFormComponent implements OnInit {
  public formGroup: FormGroup;
  @Output() public nameProjects = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nameSearch: ['', []]
    });
  }

  public searchProjects() {
    const control = this.formGroup.get('nameSearch');
    this.nameProjects.emit(control.value);
  }

}
