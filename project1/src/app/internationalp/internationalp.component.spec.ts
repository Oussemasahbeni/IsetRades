import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalpComponent } from './internationalp.component';

describe('InternationalpComponent', () => {
  let component: InternationalpComponent;
  let fixture: ComponentFixture<InternationalpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationalpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
