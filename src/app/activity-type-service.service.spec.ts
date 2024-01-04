import { TestBed } from '@angular/core/testing';

import { ActivityTypeServiceService } from './activity-type-service.service';

describe('ActivityTypeServiceService', () => {
  let service: ActivityTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
