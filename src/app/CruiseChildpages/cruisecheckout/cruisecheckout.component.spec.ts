import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisecheckoutComponent } from './cruisecheckout.component';

describe('CruisecheckoutComponent', () => {
  let component: CruisecheckoutComponent;
  let fixture: ComponentFixture<CruisecheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruisecheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruisecheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
