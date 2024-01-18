import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasillaVaciaComponent } from './casilla-vacia.component';

describe('CasillaVaciaComponent', () => {
  let component: CasillaVaciaComponent;
  let fixture: ComponentFixture<CasillaVaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasillaVaciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasillaVaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
