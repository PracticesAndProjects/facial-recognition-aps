import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../services/notification/notification.service";
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private notificationService: NotificationService, private loginService: LoginService) {
  }

  public form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
    image: new FormControl(''),
  })

  setForm(){
    this.loginService.setForm(this.form);
  }

}
