import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeralaHoneymoonComponent } from './kerala-honeymoon.component';

describe('KeralaHoneymoonComponent', () => {
  let component: KeralaHoneymoonComponent;
  let fixture: ComponentFixture<KeralaHoneymoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeralaHoneymoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeralaHoneymoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
