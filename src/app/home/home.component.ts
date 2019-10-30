import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private projects = environment.projects;
  public countProjects = 3;

  constructor() { }

  ngOnInit() {



  }

}