import { TestBed } from '@angular/core/testing';

import { RecipeHttpService } from './recipe-http.service';

describe('RecipeHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeHttpService = TestBed.get(RecipeHttpService);
    expect(service).toBeTruthy();
  });
});
