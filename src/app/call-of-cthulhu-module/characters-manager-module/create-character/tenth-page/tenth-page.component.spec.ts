import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthPageComponent } from './tenth-page.component';

describe('TenthPageComponent', () => {
  let component: TenthPageComponent;
  let fixture: ComponentFixture<TenthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
