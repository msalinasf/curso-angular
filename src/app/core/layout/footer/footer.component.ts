import { Component, OnInit } from '@angular/core';
import { NotificationsStoreService } from 'src/app/notifications/notifications-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  public notes$;

  constructor(private notificationsStore: NotificationsStoreService) { }

  ngOnInit() {
    this.notes$ = this.notificationsStore.select$();
  }

}
