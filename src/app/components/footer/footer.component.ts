import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private navbarComponent: NavbarComponent,private router: Router) { }

  ngOnInit(): void {
    this.navbarComponent.isActive(this.router.url.split("/")[1]);
  }

}
