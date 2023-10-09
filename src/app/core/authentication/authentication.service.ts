import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {firstValueFrom} from "rxjs/internal/firstValueFrom";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {User} from "./user.model";
import { NotificationService } from 'src/app/services/notification/notification.service';

enum LS_KEYS {
  TOKEN = 'tkn'
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = new Subject<boolean>();
  constructor(private router: Router, private http: HttpClient, private notificationService: NotificationService) {
    this.isAuthenticated.subscribe(isAuthenticated => {
      if (!isAuthenticated){
        this.router.navigateByUrl('login');
        this.notificationService.info('Deslogado com sucesso');
      }
    });
  }


  persistToken(token: string){
    localStorage.setItem(LS_KEYS.TOKEN, token);
  }

  removeToken(){
    localStorage.removeItem(LS_KEYS.TOKEN);
  }

  isAuthenticatedNow: boolean = false;
  user?: User;

  async login(form: FormGroup){
    this.removeToken();
    return firstValueFrom(this.http.post("login", form.getRawValue())).then(res => {
      this.setUserAndToken(res);
    })
  }

  public setUserAndToken(res: any) {
    this.user = new User(res)
    this.setToken()
  }

  public logout(){
    this.removeToken();
    this.isAuthenticated.next(false);
  }

  private setToken(){
    const token = this.user!.token;
    if (token == undefined) {
      this.notificationService.error('Erro no setup de autenticação, tente novamente');
      return;
    }
    this.persistToken(token);
    this.isAuthenticatedNow = true;
  }

}
