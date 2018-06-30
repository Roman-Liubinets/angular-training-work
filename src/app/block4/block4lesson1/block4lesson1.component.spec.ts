import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block4lesson1Component } from './block4lesson1.component';

describe('Block4lesson1Component', () => {
  let component: Block4lesson1Component;
  let fixture: ComponentFixture<Block4lesson1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block4lesson1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block4lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
