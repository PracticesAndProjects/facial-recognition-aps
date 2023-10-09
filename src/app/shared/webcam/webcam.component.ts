import {Component, Output} from '@angular/core';
import {WebcamImage, WebcamInitError} from "ngx-webcam";
import {Subject} from "rxjs";
import {SignUpService} from "../../services/sign-up/sign-up.service";
import {FormControl} from "@angular/forms";
import {NotificationService} from "../../services/notification/notification.service";

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent {
  constructor(private signupService: SignUpService, private notificationService: NotificationService) {
  }

  @Output('image-control') imageControl = new Subject<FormControl>();

  trigger: Subject<void> = new Subject<void>();
  cameraNotFound = false;
  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
    if (error.mediaStreamError && error.mediaStreamError.name === "NotFoundError"){
      this.cameraNotFound = true;
    }
  }

  tirarFoto(){
    this.trigger.next();
    this.notificationService.success("Foto tirada com sucesso")
  }

  handleImage(webcamImage: WebcamImage){
    this.updateForm(webcamImage.imageAsBase64);
  }

  private image = new FormControl('');

  updateForm(imgBase64: string){
    this.image.setValue(imgBase64);
    this.imageControl.next(this.image);
  }

}
