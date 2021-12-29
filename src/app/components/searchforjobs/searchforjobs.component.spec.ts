import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforjobsComponent } from './searchforjobs.component';

describe('SearchforjobsComponent', () => {
  let component: SearchforjobsComponent;
  let fixture: ComponentFixture<SearchforjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchforjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchforjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
