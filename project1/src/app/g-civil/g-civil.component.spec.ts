import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GCivilComponent } from './g-civil.component';

describe('GCivilComponent', () => {
  let component: GCivilComponent;
  let fixture: ComponentFixture<GCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GCivilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
