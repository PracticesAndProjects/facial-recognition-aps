import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "../../services/login/login.service";
import {NotificationService} from "../../services/notification/notification.service";

export const webcamLoginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const notificationService = inject(NotificationService);
  const router = inject(Router);
  try{
    if (loginService.getForm().valid){
      return true;
    } else {
      throw new Error();
    }
  }catch (e){
    notificationService.warning("Retornando para página de login, necessário ter formulário válido")
    router.navigateByUrl('login');
    return false;
  }
};
