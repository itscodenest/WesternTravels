import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisedestinationdetailsComponent } from './cruisedestinationdetails.component';

describe('CruisedestinationdetailsComponent', () => {
  let component: CruisedestinationdetailsComponent;
  let fixture: ComponentFixture<CruisedestinationdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruisedestinationdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruisedestinationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
