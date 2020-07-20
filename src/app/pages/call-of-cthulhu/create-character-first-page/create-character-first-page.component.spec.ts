import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterFirstPageComponent } from './create-character-first-page.component';

describe('CreateCharacterFirstPageComponent', () => {
  let component: CreateCharacterFirstPageComponent;
  let fixture: ComponentFixture<CreateCharacterFirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterFirstPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
