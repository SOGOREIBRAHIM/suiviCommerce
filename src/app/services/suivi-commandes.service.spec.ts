import { TestBed } from '@angular/core/testing';

import { SuiviCommandesService } from './suivi-commandes.service';

describe('SuiviCommandesService', () => {
  let service: SuiviCommandesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviCommandesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
