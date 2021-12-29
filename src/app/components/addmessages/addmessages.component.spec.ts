import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmessagesComponent } from './addmessages.component';

describe('AddmessagesComponent', () => {
  let component: AddmessagesComponent;
  let fixture: ComponentFixture<AddmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
