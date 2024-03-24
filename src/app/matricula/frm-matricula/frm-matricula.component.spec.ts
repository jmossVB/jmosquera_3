import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmMatriculaComponent } from './frm-matricula.component';

describe('FrmMatriculaComponent', () => {
  let component: FrmMatriculaComponent;
  let fixture: ComponentFixture<FrmMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmMatriculaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
