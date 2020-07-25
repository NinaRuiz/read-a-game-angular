import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthPageComponent } from './eighth-page.component';

describe('EighthPageComponent', () => {
  let component: EighthPageComponent;
  let fixture: ComponentFixture<EighthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EighthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
