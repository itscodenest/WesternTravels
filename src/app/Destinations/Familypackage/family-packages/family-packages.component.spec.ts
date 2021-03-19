import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPackagesComponent } from './family-packages.component';

describe('FamilyPackagesComponent', () => {
  let component: FamilyPackagesComponent;
  let fixture: ComponentFixture<FamilyPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
