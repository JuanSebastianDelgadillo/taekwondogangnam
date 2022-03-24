import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() titulo: string;

  activeHome = 'no-active';
  activeDirector = 'no-active';
  activeAcerca = 'no-active';
  activeProgramas = 'no-active';
  activeAmigos = 'no-active';
  activeCalendario = 'no-active';
  activeContacto = 'no-active';


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isActive(this.router.url.split("/")[1]);
  }

  isActive(opcion: string){
    this.activeHome       = opcion === '' ? "active": 'no-active';
    this.activeDirector   = opcion === 'director' ? "active": 'no-active';
    this.activeAcerca     = opcion === 'acerca' ? "active": 'no-active';
    this.activeProgramas  = opcion === 'programas' ? "active": 'no-active';
    this.activeAmigos     = opcion === 'amigos' ? "active": 'no-active';
    this.activeCalendario = opcion === 'calendario' ? "active": 'no-active';
    this.activeContacto   = opcion === 'contacto' ? "active": 'no-active';
  }
}
