import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TComponents2Component } from './t-components2.component';

describe('TComponents2Component', () => {
  let component: TComponents2Component;
  let fixture: ComponentFixture<TComponents2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TComponents2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TComponents2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
