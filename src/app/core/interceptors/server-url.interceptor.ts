import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServerUrlInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const cloneReq = req.clone({url: environment.SERVER_URL + req.url})
    return next.handle(cloneReq);
  }
}
