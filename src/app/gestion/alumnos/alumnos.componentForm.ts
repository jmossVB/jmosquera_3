import { Component } from '@angular/core';
import { Alumno } from './alumno';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-alumnosform',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './alumnos.componentForm.html'
  })
export class AlumnosComponentForm{
    
    modelo = new Alumno("A001", "Juan Felipe", "Perez Ochoa","1987/5/29", "Av. Las Lomas 321", "juanperez@gmail.com","987654321");
    enviado = false;
    alumnos: Alumno[] = [];

    onSubmit(){
    this.alumnos.push(this.modelo);

    console.log(this.modelo);    
    this.enviado = true;
  }

}