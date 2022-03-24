import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { AmigosComponent } from './pages/amigos/amigos.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DirectorComponent } from './pages/director/director.component';
import { ProgramasComponent } from './pages/programas/programas.component';

const routes: Routes = [
  { path : "" , component: HomeComponent },
  { path : "director" , component: DirectorComponent },
  { path : "acerca" , component: AcercaComponent },
  { path : "programas" , component: ProgramasComponent },
  { path : "amigos" , component: AmigosComponent },
  { path : "calendario" , component: CalendarioComponent },
  { path : "contacto" , component: ContactoComponent },
  { path : "login" , component: LoginComponent },
  { path : '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
