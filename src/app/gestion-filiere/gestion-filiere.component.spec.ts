import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFiliereComponent } from './gestion-filiere.component';

describe('GestionFiliereComponent', () => {
  let component: GestionFiliereComponent;
  let fixture: ComponentFixture<GestionFiliereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionFiliereComponent]
    });
    fixture = TestBed.createComponent(GestionFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
