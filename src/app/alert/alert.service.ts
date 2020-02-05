import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
  private subject = new Subject<Alert>();

  constructor() {}

  onAlert(id?: string): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  success(message: string, id?: string) {
    this.alert({ text: message, type: AlertType.success, id });
  }

  danger(message: string, id?: string) {
    this.alert({ text: message, type: AlertType.danger, id });
  }

  info(message: string, id?: string) {
    this.alert({ text: message, type: AlertType.info, id });
  }

  warn(message: string, id?: string) {
    this.alert({ text: message, type: AlertType.warning, id });
  }

  alert(alert: Alert) {
    console.log(alert);
    this.subject.next(alert);
  }
}

export enum AlertType {
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  success = 'success',
}

export interface Alert {
  id: string;
  type: AlertType;
  text: string;
}
