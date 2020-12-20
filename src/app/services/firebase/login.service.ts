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
      console.log('respuesta auth -->', respoAuth);
      this.router.navigate(["sidebar"]);
      return respoAuth.user.uid;
    } catch (error) {
      console.error('error auth -->', error);
      
    }
  }

  async logout(){
    try {
      const logoutResp = await this.angularFireAuth.auth.signOut();
      console.log('logout exitoso');
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
