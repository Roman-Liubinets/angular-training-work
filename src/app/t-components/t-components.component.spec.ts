import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TComponentsComponent } from './t-components.component';

describe('TComponentsComponent', () => {
  let component: TComponentsComponent;
  let fixture: ComponentFixture<TComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
