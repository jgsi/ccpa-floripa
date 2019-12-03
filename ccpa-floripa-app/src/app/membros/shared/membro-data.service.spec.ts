import { TestBed } from '@angular/core/testing';

import { MembroDataService } from './membro-data.service';

describe('MembroDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembroDataService = TestBed.get(MembroDataService);
    expect(service).toBeTruthy();
  });
});
