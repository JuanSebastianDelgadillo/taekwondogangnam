import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CentralHomeComponent } from './components/central-home/central-home.component';
import { BottomHomeComponent } from './components/bottom-home/bottom-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectorComponent } from './pages/director/director.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ProgramasComponent } from './pages/programas/programas.component';
import { AmigosComponent } from './pages/amigos/amigos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { TitleComponent } from './components/title/title.component';
import { MovilComponent } from './components/movil/movil.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    NavbarComponent,
    CentralHomeComponent,
    BottomHomeComponent,
    FooterComponent,
    DirectorComponent,
    AcercaComponent,
    ProgramasComponent,
    AmigosComponent,
    ContactoComponent,
    CalendarioComponent,
    TitleComponent,
    MovilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
