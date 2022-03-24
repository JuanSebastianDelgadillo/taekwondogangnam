import { Injectable } from '@angular/core';
import { ConnectionDB } from '../db/connection.db';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  async logginGoogle(){
    try {
      //return this.afAuth.signInWithPoppup(new auth.GoogleAuthPtrovider());
    } catch (error) {
      console.log(error)
    }
  }
}
