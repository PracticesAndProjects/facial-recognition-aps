import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupFormComponent} from "./pages/signup/signup-form/signup-form.component";
import {LoginFormComponent} from "./pages/login/login-form/login-form.component";
import {SignupWebcamComponent} from "./pages/signup/signup-webcam/signup-webcam.component";
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";
import {LoginWebcamComponent} from "./pages/login/login-webcam/login-webcam.component";
import {webcamLoginGuard} from "./core/guards/webcam-login.guard";
import {webcamSignupGuard} from "./core/guards/webcam-signup.guard";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {authenticationGuard} from "./core/guards/authentication.guard";

const routes: Routes = [
  {
    path: 'cadastro', component: SignupFormComponent,
  }, {
    path: 'cadastro/webcam', component: SignupWebcamComponent, canActivate: [webcamSignupGuard],
  }, {
    path: 'login/webcam', component: LoginWebcamComponent, canActivate: [webcamLoginGuard],
  }, {
    path: 'login', component: LoginFormComponent,
  }, {
    path: 'dashboard', component: DashboardComponent, canActivate: [authenticationGuard],
  }, {
    path: '**', redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
