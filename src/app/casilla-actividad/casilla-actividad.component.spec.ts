import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasillaActividadComponent } from './casilla-actividad.component';

describe('CasillaActividadComponent', () => {
  let component: CasillaActividadComponent;
  let fixture: ComponentFixture<CasillaActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasillaActividadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasillaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
