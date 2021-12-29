import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoobseekerComponent } from './joobseeker.component';

describe('JoobseekerComponent', () => {
  let component: JoobseekerComponent;
  let fixture: ComponentFixture<JoobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
