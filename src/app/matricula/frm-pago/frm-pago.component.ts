import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frm-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './frm-pago.component.html',
  styleUrl: './frm-pago.component.css'
})
export class FrmPagoComponent {
  numMatricula: string = '';
  monPago: string = '';
  numTarjeta: string = '';
  fecVencimiento: string = '';
  codcvv: string = '';

  pagoProcesado: boolean = false;

  procesarPago() {
    this.pagoProcesado = true;
    this.limpiarcontroles();
  }

  limpiarcontroles(){
    this.numMatricula="";
  }
}
