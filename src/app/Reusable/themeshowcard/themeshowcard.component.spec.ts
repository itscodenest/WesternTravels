import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeshowcardComponent } from './themeshowcard.component';

describe('ThemeshowcardComponent', () => {
  let component: ThemeshowcardComponent;
  let fixture: ComponentFixture<ThemeshowcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeshowcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeshowcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
