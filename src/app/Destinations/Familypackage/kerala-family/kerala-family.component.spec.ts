import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeralaFamilyComponent } from './kerala-family.component';

describe('KeralaFamilyComponent', () => {
  let component: KeralaFamilyComponent;
  let fixture: ComponentFixture<KeralaFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeralaFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeralaFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
