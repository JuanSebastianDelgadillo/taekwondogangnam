import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base_url: string = environment.base_url;

  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': `${environment.path_crypt}`});

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.base_url}/usuarios`);
  }

  getUsuario() {
    return this.http
      .get(`${this.base_url}/usuario`, { headers: this.headers });
  }
}
