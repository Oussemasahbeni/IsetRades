import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecComponent } from './mec.component';

describe('MecComponent', () => {
  let component: MecComponent;
  let fixture: ComponentFixture<MecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
