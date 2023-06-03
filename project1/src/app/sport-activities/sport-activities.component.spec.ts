import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportActivitiesComponent } from './sport-activities.component';

describe('SportActivitiesComponent', () => {
  let component: SportActivitiesComponent;
  let fixture: ComponentFixture<SportActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
