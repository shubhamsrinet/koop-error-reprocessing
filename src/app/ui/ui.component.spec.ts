import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfgUIComponent } from './ui.component';

describe('OfgUIComponent', () => {
  let component: OfgUIComponent;
  let fixture: ComponentFixture<OfgUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfgUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfgUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
