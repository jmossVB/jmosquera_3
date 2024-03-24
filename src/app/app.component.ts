import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraAppComponent } from './utiles/cabecera-app/cabecera-app.component';
import { CarruselAppComponent } from './utiles/carrusel-app/carrusel-app.component';
import { PieAppComponent } from './utiles/pie-app/pie-app.component';
import { AlumnosComponent } from './gestion/alumnos/alumnos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraAppComponent, CarruselAppComponent, PieAppComponent, AlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jmosquera_3';
}
