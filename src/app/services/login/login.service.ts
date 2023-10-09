import {Injectable} from '@angular/core';
import {ServiceForm} from "../service-form.extend";
import {AuthenticationService} from "../../core/authentication/authentication.service";
import {Router} from '@angular/router';
import {NotificationService} from '../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ServiceForm {
  constructor(private authenticationService: AuthenticationService, private router: Router, private notificationService: NotificationService) { super() }

  login(){
    this.authenticationService.login(this.getForm()).then(() => {
      this.router.navigateByUrl('dashboard')
      this.notificationService.success('Usuário logado com sucesso')
    });
  }

}
