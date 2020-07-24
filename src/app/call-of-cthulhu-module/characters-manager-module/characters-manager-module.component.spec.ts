import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersManagerModuleComponent } from './characters-manager-module.component';

describe('CharactersManagerModuleComponent', () => {
  let component: CharactersManagerModuleComponent;
  let fixture: ComponentFixture<CharactersManagerModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersManagerModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersManagerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
