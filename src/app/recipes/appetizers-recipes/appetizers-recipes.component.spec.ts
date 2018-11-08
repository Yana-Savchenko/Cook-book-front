import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppetizersRecipesComponent } from './appetizers-recipes.component';

describe('AppetizersRecipesComponent', () => {
  let component: AppetizersRecipesComponent;
  let fixture: ComponentFixture<AppetizersRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppetizersRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppetizersRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
