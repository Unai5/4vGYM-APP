import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorsComponent } from './monitors.component';

describe('MonitorsComponent', () => {
  let component: MonitorsComponent;
  let fixture: ComponentFixture<MonitorsComponent>;
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
