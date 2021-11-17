import { TestBed } from '@angular/core/testing';

import { EmpinfoservService } from './empinfoserv.service';

describe('EmpinfoservService', () => {
  let service: EmpinfoservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpinfoservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
