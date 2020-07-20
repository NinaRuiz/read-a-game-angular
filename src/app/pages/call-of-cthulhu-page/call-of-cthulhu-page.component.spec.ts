import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOfCthulhuPageComponent } from './call-of-cthulhu-page.component';

describe('CallOfCthulhuPageComponent', () => {
  let component: CallOfCthulhuPageComponent;
  let fixture: ComponentFixture<CallOfCthulhuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallOfCthulhuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallOfCthulhuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
