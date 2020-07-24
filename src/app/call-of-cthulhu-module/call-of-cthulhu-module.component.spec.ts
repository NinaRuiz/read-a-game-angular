import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOfCthulhuModuleComponent } from './call-of-cthulhu-module.component';

describe('CallOfCthulhuModuleComponent', () => {
  let component: CallOfCthulhuModuleComponent;
  let fixture: ComponentFixture<CallOfCthulhuModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallOfCthulhuModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallOfCthulhuModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
