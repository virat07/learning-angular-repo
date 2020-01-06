import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeTwitterComponent } from './like-twitter.component';

describe('LikeTwitterComponent', () => {
  let component: LikeTwitterComponent;
  let fixture: ComponentFixture<LikeTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
