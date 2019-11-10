import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  date: Date;

  constructor() { }

  private addZero(value) {

    if (value < 10) {
      value = '0' + value;
    }
    return value;
  }

  public getFormattedTime() {
    this.date = new Date();
    return this.date.getHours() + ':' + this.addZero(this.date.getMinutes()) + ':' + this.addZero(this.date.getSeconds()) + ' horas';
  }
}
