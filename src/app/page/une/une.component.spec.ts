import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UneComponent } from './une.component';

describe('UneComponent', () => {
  let component: UneComponent;
  let fixture: ComponentFixture<UneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
