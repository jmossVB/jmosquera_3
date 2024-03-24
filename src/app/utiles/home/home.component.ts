import { Component } from '@angular/core';
import { CarruselAppComponent } from '../carrusel-app/carrusel-app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselAppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
