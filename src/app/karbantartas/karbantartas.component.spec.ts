import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarbantartasComponent } from './karbantartas.component';

describe('KarbantartasComponent', () => {
  let component: KarbantartasComponent;
  let fixture: ComponentFixture<KarbantartasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarbantartasComponent]
    });
    fixture = TestBed.createComponent(KarbantartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
