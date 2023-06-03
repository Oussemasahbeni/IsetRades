import { TestBed } from '@angular/core/testing';

import { IsetService } from './iset.service';

describe('IsetService', () => {
  let service: IsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
