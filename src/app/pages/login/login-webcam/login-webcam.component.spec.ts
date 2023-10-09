import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWebcamComponent } from './login-webcam.component';

describe('LoginWebcamComponent', () => {
  let component: LoginWebcamComponent;
  let fixture: ComponentFixture<LoginWebcamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginWebcamComponent]
    });
    fixture = TestBed.createComponent(LoginWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
