import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutisetComponent } from './aboutiset.component';

describe('AboutisetComponent', () => {
  let component: AboutisetComponent;
  let fixture: ComponentFixture<AboutisetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutisetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutisetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
