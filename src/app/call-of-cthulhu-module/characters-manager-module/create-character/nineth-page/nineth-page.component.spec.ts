import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinethPageComponent } from './nineth-page.component';

describe('NinethPageComponent', () => {
  let component: NinethPageComponent;
  let fixture: ComponentFixture<NinethPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinethPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinethPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
