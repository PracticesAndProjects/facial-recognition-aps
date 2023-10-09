import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {SignUpService} from "../../services/sign-up/sign-up.service";
import {NotificationService} from "../../services/notification/notification.service";

export const webcamSignupGuard: CanActivateFn = (route, state) => {
  const signupService = inject(SignUpService);
  const notificationService = inject(NotificationService);
  const router = inject(Router);

  try {
    if (signupService.getForm().valid) {
      return true;
    } else {
      throw new Error();
    }
  } catch (e) {
    notificationService.warning("Retornando para página de login, necessário ter formulário válido")
    router.navigateByUrl('login');
    return false;
  }
};
