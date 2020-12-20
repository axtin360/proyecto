import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router : Router
  ) { }

  async login(email: string, pass: string){
    try {
     const respoAuth = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass);
     this.router.navigate(["dashboard"]); 
     console.log('respuesta auth -->', respoAuth);
      return respoAuth.user.uid;
    } catch (error) {
      console.error('error auth -->', error);
      
    }
    this.router.navigate(['dashboard'])
  }

  async logout(){
    try {
      const logoutResp = await this.angularFireAuth.auth.signOut();
      console.log('logout exitoso');
      this.router.navigate(["login"]);

      return logoutResp;
    } catch (error) {
      console.log('logout error -->', error);
      return error;
    }
  }

 async currentUser(){
    try {
      const currentUser = this.angularFireAuth.auth.currentUser;
      return currentUser;
    } catch (error) {
      return error;
    }
  }
}
