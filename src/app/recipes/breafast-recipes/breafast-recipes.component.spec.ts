import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreafastRecipesComponent } from './breafast-recipes.component';

describe('BreafastRecipesComponent', () => {
  let component: BreafastRecipesComponent;
  let fixture: ComponentFixture<BreafastRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreafastRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreafastRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
