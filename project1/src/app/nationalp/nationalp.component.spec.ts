import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalpComponent } from './nationalp.component';

describe('NationalpComponent', () => {
  let component: NationalpComponent;
  let fixture: ComponentFixture<NationalpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
