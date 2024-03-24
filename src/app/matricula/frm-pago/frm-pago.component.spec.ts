import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmPagoComponent } from './frm-pago.component';

describe('FrmPagoComponent', () => {
  let component: FrmPagoComponent;
  let fixture: ComponentFixture<FrmPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
