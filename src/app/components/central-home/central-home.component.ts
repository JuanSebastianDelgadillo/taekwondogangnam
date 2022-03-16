import { Component, HostListener, OnInit } from '@angular/core';

declare var myScript: any;

@Component({
  selector: 'app-central-home',
  templateUrl: './central-home.component.html',
  styleUrls: ['./central-home.component.css']
})
export class CentralHomeComponent implements OnInit {

  instanceLib: any;

  constructor() { }

  ngOnInit(): void {
    // this.instanceLib = myScript();
    // this.instanceLib.mostrarScroll();

  }

}
