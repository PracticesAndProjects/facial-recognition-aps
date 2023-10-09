import {FormGroup} from "@angular/forms";

export abstract class ServiceForm {
  constructor() {
  }

  form?: FormGroup;

  setForm(form: FormGroup){
    this.form = form;
  }

  getForm(){
    if (this.form == undefined) throw new Error('Form is not defined')
    return this.form;
  }
}
