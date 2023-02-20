import { TestBed } from '@angular/core/testing';

import { NewsOperationService } from './news-operation.service';

describe('NewsOperationService', () => {
  let service: NewsOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
