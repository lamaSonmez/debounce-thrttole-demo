import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosWrapperComponent } from './demos-wrapper.component';

describe('DemosWrapperComponent', () => {
  let component: DemosWrapperComponent;
  let fixture: ComponentFixture<DemosWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemosWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemosWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
