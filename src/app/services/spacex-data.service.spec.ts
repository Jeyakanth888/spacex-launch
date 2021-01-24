import { TestBed } from '@angular/core/testing';

import { SpacexDataService } from './spacex-data.service';

describe('SpacexDataService', () => {
  let service: SpacexDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
