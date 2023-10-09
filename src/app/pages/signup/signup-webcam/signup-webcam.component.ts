import {Component, OnInit} from '@angular/core';
import {SignUpService} from "../../../services/sign-up/sign-up.service";
import {FormControl} from "@angular/forms";
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-signup-webcam',
  templateUrl: './signup-webcam.component.html',
  styleUrls: ['./signup-webcam.component.scss']
})
export class SignupWebcamComponent implements OnInit{
  constructor(private authenticationService: AuthenticationService, private signupService: SignUpService, private router: Router) {
  }

  ngOnInit(){
    const imageControl = this.signupService.getForm().controls['image'];
    if (imageControl.value) imageControl.setValue('');
  }

  haveImage: boolean = false;

  setForm(control: FormControl){
    this.signupService.getForm().setControl('image', control);
    this.haveImage = !!control.getRawValue()
  }

  signUp(){
    this.signupService
      .signUp()
      .then((res) =>  this.authenticationService.setUserAndToken(res))
      .then(() => this.router.navigateByUrl('dashboard'))
      .catch(() => this.router.navigateByUrl('cadastro'))
  }

}
