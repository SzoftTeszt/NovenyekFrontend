import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsComponent } from './plants.component';

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantsComponent]
    });
    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
