import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptioncarouselComponent } from './captioncarousel.component';

describe('CaptioncarouselComponent', () => {
  let component: CaptioncarouselComponent;
  let fixture: ComponentFixture<CaptioncarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptioncarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptioncarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
