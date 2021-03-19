import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneymoonPackagesComponent } from './honeymoon-packages.component';

describe('HoneymoonPackagesComponent', () => {
  let component: HoneymoonPackagesComponent;
  let fixture: ComponentFixture<HoneymoonPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneymoonPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneymoonPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
