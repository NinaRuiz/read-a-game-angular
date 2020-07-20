import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersManagerPageComponent } from './characters-manager-page.component';

describe('CreateCharacterFirstPageComponent', () => {
  let component: CharactersManagerPageComponent;
  let fixture: ComponentFixture<CharactersManagerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersManagerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
