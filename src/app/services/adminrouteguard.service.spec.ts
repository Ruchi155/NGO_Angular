import { TestBed } from '@angular/core/testing';

import { AdminrouteguardService } from './adminrouteguard.service';

describe('AdminrouteguardService', () => {
  let service: AdminrouteguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminrouteguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
