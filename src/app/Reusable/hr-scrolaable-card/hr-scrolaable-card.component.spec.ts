import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrScrolaableCardComponent } from './hr-scrolaable-card.component';

describe('HrScrolaableCardComponent', () => {
  let component: HrScrolaableCardComponent;
  let fixture: ComponentFixture<HrScrolaableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrScrolaableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrScrolaableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
