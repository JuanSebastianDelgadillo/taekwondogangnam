import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  async logginGoogle(){
    try {
      return this.afAuth.signInWithPoppup(new auth.GoogleAuthPtrovider());
    } catch (error) {
      console.log(error)
    }
  }
}
