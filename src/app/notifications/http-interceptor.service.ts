import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { NotificationsStoreService } from './notifications-store.service';
import { DateTimeService } from '../core/date-time.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private date: any;

  constructor(private notificationsStore: NotificationsStoreService, private dateTimeService: DateTimeService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(req).pipe(tap((event: HttpEvent<any>) => { this.notificationsStore.dispatch(event.url + ' ' + event.status); } ));
    return next.handle(req).pipe(tap(this.dispatch.bind(this) ));
    // return next.handle(req).pipe(tap((event: HttpEvent<any>) => { console.log(event); } ));
  }

  private dispatch(message: HttpEvent<any>) {
    if (message instanceof HttpResponse) {
      this.date = this.dateTimeService.getFormattedTime();
      this.notificationsStore.dispatch(this.date + ' - ' + message.url + ' - status ' + message.status);
    }
  }

}
