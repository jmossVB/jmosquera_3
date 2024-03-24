import { Routes } from '@angular/router';
import { AlumnosComponent } from './gestion/alumnos/alumnos.component';
import { CursosComponent } from './gestion/cursos/cursos.component';
import { FrmMatriculaComponent } from './matricula/frm-matricula/frm-matricula.component';
import { FrmPagoComponent } from './matricula/frm-pago/frm-pago.component';
import { HomeComponent } from './utiles/home/home.component';
import { AlumnosComponentForm } from './gestion/alumnos/alumnos.componentForm';
import { CursosComponentForm } from './gestion/cursos/cursos.componentForm';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'alumnos/alumnosForm', component: AlumnosComponentForm },
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/cursosForm', component: CursosComponentForm },
    { path: 'matricula', component: FrmMatriculaComponent },
    { path: 'pagos', component: FrmPagoComponent },
];
