import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditNewsComponent } from './dialog-edit-news.component';

describe('DialogEditNewsComponent', () => {
  let component: DialogEditNewsComponent;
  let fixture: ComponentFixture<DialogEditNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
