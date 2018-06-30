import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Block5lesson1Component } from './block5lesson1.component';

describe('Block5lesson1Component', () => {
  let component: Block5lesson1Component;
  let fixture: ComponentFixture<Block5lesson1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Block5lesson1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Block5lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
