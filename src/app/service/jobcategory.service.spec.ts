import { TestBed } from '@angular/core/testing';

import { JobcategoryService } from './jobcategory.service';

describe('JobcategoryService', () => {
  let service: JobcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
