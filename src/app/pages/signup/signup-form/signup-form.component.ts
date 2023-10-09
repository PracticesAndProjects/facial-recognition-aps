import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignUpService} from "../../../services/sign-up/sign-up.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../services/notification/notification.service";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  constructor(private signupService: SignUpService, private router: Router, private notificationService: NotificationService) {
  }

  public form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
    cpf: new FormControl('', Validators.pattern(new RegExp('([0-9]{2}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[\\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[-]?[0-9]{2})'))),
    image: new FormControl(''),
    nivel: new FormControl(1, [Validators.min(1), Validators.max(3)])
})

  setServiceForm(){
    try{
      this.signupService.setForm(this.form);
      this.router.navigate(['/cadastro/webcam']);
    } catch(e: any){
      this.notificationService.error(e.message);
    }
  }
}
