import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollThrottleDemoComponent } from './scroll-throttle-demo.component';

describe('ScrollThrottleDemoComponent', () => {
  let component: ScrollThrottleDemoComponent;
  let fixture: ComponentFixture<ScrollThrottleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollThrottleDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollThrottleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
