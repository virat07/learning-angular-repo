import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemySignupFormComponent } from './udemy-signup-form.component';

describe('UdemySignupFormComponent', () => {
  let component: UdemySignupFormComponent;
  let fixture: ComponentFixture<UdemySignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemySignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemySignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
