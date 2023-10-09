import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { webcamSignupGuard } from './webcam-signup.guard';

describe('webcamSignupGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => webcamSignupGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
