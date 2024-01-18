import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCardsComponent } from './monitor-cards.component';

describe('MonitorCardsComponent', () => {
  let component: MonitorCardsComponent;
  let fixture: ComponentFixture<MonitorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
