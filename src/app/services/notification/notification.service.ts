import {Injectable} from '@angular/core';
import {NotifierService} from "angular-notifier";

export enum type {
  INFO = 'info', DEFAULT = 'default', SUCCESS = 'success', WARNING = 'warning', ERROR = 'error',
}


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private notifierService: NotifierService) {
  }

  public success(message: string) {
    this.notifierService.notify(type.SUCCESS, message);
  }

  public info(message: string) {
    this.notifierService.notify(type.INFO, message);
  }

  public default(message: string) {
    this.notifierService.notify(type.DEFAULT, message);
  }

  public warning(message: string) {
    this.notifierService.notify(type.WARNING, message);
  }

  public error(message: string) {
    this.notifierService.notify(type.ERROR, message);
  }

}
