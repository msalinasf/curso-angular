import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationsStoreService {

  private notifications: any;

  private notifications$ = new BehaviorSubject<any[]>([]);

  constructor() {}

  public select$ = () => this.notifications$.asObservable();

  public dispatch(notification) {
    this.notifications = notification;
    this.notifications$.next(this.notifications);
  }
}
