import {HttpClient} from '@angular/common/http';
import {Component, Input} from '@angular/core';
import {catchError, map, of, take} from 'rxjs';
import {NotificationService} from "../../../../services/notification/notification.service";
import {AuthenticationService} from "../../../../core/authentication/authentication.service";

@Component({
  selector: 'app-level-checker',
  templateUrl: './level-checker.component.html',
  styleUrls: ['./level-checker.component.scss']
})
export class LevelCheckerComponent {

  @Input() levelToAssert?: number;

  style = '';

  constructor(private http: HttpClient, private notificationService: NotificationService, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.http.get(`check-access/${this.levelToAssert}/${this.authenticationService.user?.email}`)
      .pipe(take(1), map(() => false), catchError(() => of(true)))
      .subscribe((hasError) => {
        if (hasError) {
          this.style = 'error'
        } else {
          this.style = 'success'
        }
      })
  }

}
