import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceThrottleComponent } from './debounce-throttle.component';

describe('DebounceThrottleComponent', () => {
  let component: DebounceThrottleComponent;
  let fixture: ComponentFixture<DebounceThrottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceThrottleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceThrottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
