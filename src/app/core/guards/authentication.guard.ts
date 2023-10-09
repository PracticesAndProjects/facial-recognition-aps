import { CanActivateFn, Router } from '@angular/router';
import {AuthenticationService} from "../authentication/authentication.service";
import { inject } from '@angular/core';
import {NotificationService} from "../../services/notification/notification.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const notificationService = inject(NotificationService);
  const router = inject(Router);
  if (authenticationService.isAuthenticatedNow){
    return true;
  } else {
    notificationService.warning("Retornando para página de login, usuário não logado")
    router.navigateByUrl('login');
    return false;
  }
};
