import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondInfoPageComponent } from './second-info-page.component';

describe('SecondInfoPageComponent', () => {
  let component: SecondInfoPageComponent;
  let fixture: ComponentFixture<SecondInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
