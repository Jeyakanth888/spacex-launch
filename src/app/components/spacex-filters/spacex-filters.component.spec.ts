import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexFiltersComponent } from './spacex-filters.component';

describe('SpacexFiltersComponent', () => {
  let component: SpacexFiltersComponent;
  let fixture: ComponentFixture<SpacexFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
