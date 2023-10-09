import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from 'rxjs';
import {NotificationService} from "../../services/notification/notification.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Erro: ${error.error.message}`;
          }
          else {
            errorMsg = `Cod. de erro: ${error.status},  Mensagem: ${error.error.message}`;
          }
          this.notificationService.error(errorMsg);
          return throwError(() => new Error(error.error.message));
        })
      )
  }

}
