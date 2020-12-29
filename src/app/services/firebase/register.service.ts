import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
     private angularFireAuth: AngularFireAuth,
     private router: Router,
  ) { }

  async registerByUserEmail(email:string, pass:string){
    try {
          const respRegister = await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass);
          this.router.navigate(["dashboard"]); 
          return respRegister.user;
    } catch (error) {
      console.error('error register', error);
    }
  }
}
