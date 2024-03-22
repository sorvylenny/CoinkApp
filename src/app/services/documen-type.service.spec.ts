import { TestBed } from '@angular/core/testing';

import { DocumenTypeService } from './documen-type.service';

describe('DocumenTypeService', () => {
  let service: DocumenTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumenTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
