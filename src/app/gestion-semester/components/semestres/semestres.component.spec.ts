import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemestresComponent } from './semestres.component';

describe('SemestresComponent', () => {
  let component: SemestresComponent;
  let fixture: ComponentFixture<SemestresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemestresComponent]
    });
    fixture = TestBed.createComponent(SemestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
