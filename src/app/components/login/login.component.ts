import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authLogin: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(){
    try {
      this.authLogin.getUsuarios().subscribe((usuarios) => {
        console.log("usuarios", usuarios);
      })
    } catch (error) {
      console.log("Error en login con google");
      
    }
   
  }

  onGoogleLogin(){
    try {
      this.authLogin.getUsuarios().subscribe((usuarios) => {
        console.log("usuarios", usuarios);
      })
    } catch (error) {
      console.log("Error en login con google");
      
    }
   
  }

}
