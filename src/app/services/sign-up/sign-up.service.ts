import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ServiceForm} from "../service-form.extend";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService extends ServiceForm{
  constructor(private http: HttpClient) {
    super();
  }

  signUp(){
    return firstValueFrom(this.http.post('cadastro', this.form?.getRawValue()))
  }
}
