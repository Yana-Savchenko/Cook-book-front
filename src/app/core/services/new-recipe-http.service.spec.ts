import { TestBed } from '@angular/core/testing';

import { NewRecipeHttpService } from './new-recipe-http.service';

describe('NewRecipeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewRecipeHttpService = TestBed.get(NewRecipeHttpService);
    expect(service).toBeTruthy();
  });
});
