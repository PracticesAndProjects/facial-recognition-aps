import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {LoginFormComponent} from './pages/login/login-form/login-form.component';
import {SignupFormComponent} from './pages/signup/signup-form/signup-form.component';
import {WebcamModule} from "ngx-webcam";
import {WebcamComponent} from './shared/webcam/webcam.component';
import {NotifierModule} from 'angular-notifier';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {SignupWebcamComponent} from './pages/signup/signup-webcam/signup-webcam.component';
import {LoginWebcamComponent} from './pages/login/login-webcam/login-webcam.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from "@angular/material/list";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ServerUrlInterceptor} from "./core/interceptors/server-url.interceptor";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import { LevelCheckerComponent } from './pages/dashboard/components/level-checker/level-checker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    WebcamComponent,
    SignupWebcamComponent,
    LoginWebcamComponent,
    DashboardComponent,
    LevelCheckerComponent,
  ],
  imports: [HttpClientModule, WebcamModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatDividerModule, NotifierModule, MatChipsModule, MatIconModule, MatGridListModule, MatMenuModule, MatListModule],
  providers: [
    HttpClient, {provide: HTTP_INTERCEPTORS, useClass: ServerUrlInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
