import { Component } from '@angular/core';
import { AlumnosComponent } from '../../gestion/alumnos/alumnos.component';
import { Alumno } from '../../gestion/alumnos/alumno';
import { Curso } from '../../gestion/cursos/curso';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frm-matricula',
  standalone: true,
  imports: [AlumnosComponent, FormsModule, CommonModule],
  templateUrl: './frm-matricula.component.html',
  styleUrl: './frm-matricula.component.css'
})
export class FrmMatriculaComponent {
  alumnomat: Alumno = { id: "0", nombres: '', apellidos: '', fechadenacimiento: "", direccion: '', correo: '', telefono: '' };
  cursosmat: Curso[] = [    
    {id:"C002", nombre: "JAVA", horas:3, creditos: 2, categoria:"SOFTWARE"},
    {id:"C003", nombre: "INTERNET", horas:6, creditos:4, categoria:"REDES Y COMUNICACION"},
    {id:"C004", nombre: "ANGULAR", horas:12, creditos:1, categoria:"SOFTWARE"},
    {id:"C005", nombre: "IMPRESORAS", horas:13, creditos:3, categoria:"HARDWARE"},
    {id:"C006", nombre: "MONITORES", horas:14, creditos:3, categoria:"HARDWARE"},
    {id:"C007", nombre: "SOPORTE TECNICO", horas:15, creditos:5, categoria:"REDES Y COMUNICACION"},
  ];

  cursosSeleccionados: string[] = [];
  matriculas: any[] = [];

  submitForm() {
    const cursoSeleccionado = this.cursosmat.find(curso => curso.id === this.cursosSeleccionados[0]);
    if (cursoSeleccionado) {

      this.matriculas.push({ alumno: this.alumnomat, curso: cursoSeleccionado });
    }
    this.alumnomat = { id: "0", nombres: '', apellidos: '', fechadenacimiento: "", direccion: '', correo: '', telefono: '' };
    console.log('Alumno:', this.alumnomat);
    console.log('Cursos seleccionados:', this.cursosSeleccionados);
  }
}