import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { webcamLoginGuard } from './webcam-login.guard';

describe('webcamLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => webcamLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
