import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styles: []
})
export class ViewerComponent implements OnInit {

  public projectID = '';

  constructor(activateRoute: ActivatedRoute) {
    this.projectID = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {

  }

}
