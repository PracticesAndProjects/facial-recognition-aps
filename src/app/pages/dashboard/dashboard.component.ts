import {Component} from '@angular/core';
import {AuthenticationService} from "../../core/authentication/authentication.service";
import {User} from "../../core/authentication/user.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private authenticationService: AuthenticationService) {
    this.user = authenticationService.user || new User({});
  }
  user: User;

  logout(){
    this.authenticationService.logout();
  }
}
