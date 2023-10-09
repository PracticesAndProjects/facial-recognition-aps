import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWebcamComponent } from './signup-webcam.component';

describe('SignupWebcamComponent', () => {
  let component: SignupWebcamComponent;
  let fixture: ComponentFixture<SignupWebcamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupWebcamComponent]
    });
    fixture = TestBed.createComponent(SignupWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
