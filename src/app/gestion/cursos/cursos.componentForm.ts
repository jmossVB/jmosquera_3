import { Component } from '@angular/core';
import { Curso } from './curso';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursosform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cursos.componentForm.html'
})
export class CursosComponentForm {
  horas = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  creditos = [0, 1, 2, 3, 4, 5];
  categoria = ["SOFTWARE", "HARDWARE", "REDES Y COMUNICACION"];
  modelo = new Curso("C0001", "phyton", this.horas[19], this.creditos[4], this.categoria[1]);
  enviado = false;

  onSubmit() {
    console.log(this.modelo);
    this.enviado = true;
  }

}