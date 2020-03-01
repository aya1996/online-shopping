import { TestBed } from '@angular/core/testing';

import { ServicenodeService } from './services/servicenode.service';

describe('ServicenodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicenodeService = TestBed.get(ServicenodeService);
    expect(service).toBeTruthy();
  });
});
