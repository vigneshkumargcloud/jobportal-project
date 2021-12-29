import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumebyComponent } from './resumeby.component';

describe('ResumebyComponent', () => {
  let component: ResumebyComponent;
  let fixture: ComponentFixture<ResumebyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumebyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumebyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
