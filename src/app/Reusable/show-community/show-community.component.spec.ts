import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCommunityComponent } from './show-community.component';

describe('ShowCommunityComponent', () => {
  let component: ShowCommunityComponent;
  let fixture: ComponentFixture<ShowCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
