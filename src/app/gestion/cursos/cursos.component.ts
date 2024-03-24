import { Component } from '@angular/core';
import { Curso } from './curso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: Curso[] = [
    {id:"C002", nombre: "JAVA", horas:3, creditos: 2, categoria:"SOFTWARE"},
    {id:"C003", nombre: "INTERNET", horas:6, creditos:4, categoria:"REDES Y COMUNICACION"},
    {id:"C004", nombre: "ANGULAR", horas:12, creditos:1, categoria:"SOFTWARE"},
    {id:"C005", nombre: "IMPRESORAS", horas:13, creditos:3, categoria:"HARDWARE"},
    {id:"C006", nombre: "MONITORES", horas:14, creditos:3, categoria:"HARDWARE"},
    {id:"C007", nombre: "SOPORTE TECNICO", horas:15, creditos:5, categoria:"REDES Y COMUNICACION"},


  ]; 

}
