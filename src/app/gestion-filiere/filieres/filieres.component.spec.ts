import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilieresComponent } from './filieres.component';

describe('FilieresComponent', () => {
  let component: FilieresComponent;
  let fixture: ComponentFixture<FilieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilieresComponent]
    });
    fixture = TestBed.createComponent(FilieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
