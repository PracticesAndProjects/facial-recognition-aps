import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelCheckerComponent } from './level-checker.component';

describe('LevelCheckerComponent', () => {
  let component: LevelCheckerComponent;
  let fixture: ComponentFixture<LevelCheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelCheckerComponent]
    });
    fixture = TestBed.createComponent(LevelCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
