import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchProgramsComponent } from './spacex-launch-programs.component';

describe('SpacexLaunchProgramsComponent', () => {
  let component: SpacexLaunchProgramsComponent;
  let fixture: ComponentFixture<SpacexLaunchProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexLaunchProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
