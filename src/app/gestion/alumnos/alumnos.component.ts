import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from './alumno';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
   alumnos: Alumno[] = [
     {id:"A002", nombres: "Liliana", apellidos:"Fernandez Zambrano", fechadenacimiento: "1986-4-30", direccion:"Av Arequips 321",correo: "fernandez@gmail.com",telefono:"987651234"},
     {id:"A003", nombres: "Olivia", apellidos:"Gonzales Calle", fechadenacimiento:"1987-6-25", direccion:"av Angamos 876",correo: "gonzales@gmail.com",telefono:"987654321"},
     {id:"A004", nombres: "Fiorella", apellidos:"Quispe Quiñoes", fechadenacimiento:"1988-8-20", direccion:"Jr Junin 987",correo: "quispe@gmail.com",telefono:"123456789"},
     {id:"A005", nombres: "Violeta", apellidos:"Carranza Zambrano", fechadenacimiento:"1989-10-15", direccion:"Av Arequips 321",correo: "carranza@gmail.com",telefono:"987651234"},
     {id:"A006", nombres: "Fatima", apellidos:"Olivera Calle", fechadenacimiento:"1990-12-10", direccion:"av Angamos 876",correo: "olivera@gmail.com",telefono:"987654321"},
     {id:"A007", nombres: "Pedro", apellidos:"Rondon Quiñoes", fechadenacimiento:"1991-2-5", direccion:"Jr Junin 987",correo: "rondon@gmail.com",telefono:"123456789"},


   ]; 


}