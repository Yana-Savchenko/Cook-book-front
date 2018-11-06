import { TestBed } from '@angular/core/testing';

import { HomeHttpService } from './home-http.service';

describe('HomeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeHttpService = TestBed.get(HomeHttpService);
    expect(service).toBeTruthy();
  });
});
