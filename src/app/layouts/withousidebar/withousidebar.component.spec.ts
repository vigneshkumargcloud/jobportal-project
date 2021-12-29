import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithousidebarComponent } from './withousidebar.component';

describe('WithousidebarComponent', () => {
  let component: WithousidebarComponent;
  let fixture: ComponentFixture<WithousidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithousidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithousidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
