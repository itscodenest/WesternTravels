import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeHolidayComponent } from './theme-holiday.component';

describe('ThemeHolidayComponent', () => {
  let component: ThemeHolidayComponent;
  let fixture: ComponentFixture<ThemeHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
