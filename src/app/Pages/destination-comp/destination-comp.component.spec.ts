import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCompComponent } from './destination-comp.component';

describe('DestinationCompComponent', () => {
  let component: DestinationCompComponent;
  let fixture: ComponentFixture<DestinationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
