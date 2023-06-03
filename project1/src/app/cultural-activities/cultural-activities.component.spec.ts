import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalActivitiesComponent } from './cultural-activities.component';

describe('CulturalActivitiesComponent', () => {
  let component: CulturalActivitiesComponent;
  let fixture: ComponentFixture<CulturalActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturalActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
