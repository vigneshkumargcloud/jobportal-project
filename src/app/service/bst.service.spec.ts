import { TestBed } from '@angular/core/testing';

import { BstService } from './bst.service';

describe('BstService', () => {
  let service: BstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
