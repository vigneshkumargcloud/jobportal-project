import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessstreamComponent } from './businessstream.component';

describe('BusinessstreamComponent', () => {
  let component: BusinessstreamComponent;
  let fixture: ComponentFixture<BusinessstreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessstreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
