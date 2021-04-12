import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidsafetyComponent } from './covidsafety.component';

describe('CovidsafetyComponent', () => {
  let component: CovidsafetyComponent;
  let fixture: ComponentFixture<CovidsafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidsafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidsafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
