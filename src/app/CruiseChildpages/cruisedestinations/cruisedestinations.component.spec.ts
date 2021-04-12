import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisedestinationsComponent } from './cruisedestinations.component';

describe('CruisedestinationsComponent', () => {
  let component: CruisedestinationsComponent;
  let fixture: ComponentFixture<CruisedestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruisedestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruisedestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
