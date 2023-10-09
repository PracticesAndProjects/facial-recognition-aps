import { Component } from '@angular/core';
import {SignUpService} from "../../../services/sign-up/sign-up.service";
import {FormControl} from "@angular/forms";
import {NotificationService} from "../../../services/notification/notification.service";
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-login-webcam',
  templateUrl: './login-webcam.component.html',
  styleUrls: ['./login-webcam.component.scss']
})
export class LoginWebcamComponent {

  constructor(private loginService: LoginService, private notificationService: NotificationService) {
  }


  hasImage = false;
  updateForm(control: FormControl){
    this.loginService.getForm().setControl('image', control);
    const imageValue = control.getRawValue();
    this.hasImage = !!imageValue;
  }

  doLogin(){
    const form = this.loginService.getForm().valid;
    if (form){
      this.loginService.login()
    } else {
      this.notificationService.error('Form is invalid, try again')
    }
  }



}
