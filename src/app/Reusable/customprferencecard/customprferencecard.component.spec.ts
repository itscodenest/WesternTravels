import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomprferencecardComponent } from './customprferencecard.component';

describe('CustomprferencecardComponent', () => {
  let component: CustomprferencecardComponent;
  let fixture: ComponentFixture<CustomprferencecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomprferencecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomprferencecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
