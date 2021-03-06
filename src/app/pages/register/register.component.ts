import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators,  } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RegisterService } from '../../services/firebase/register.service';
import { FirestoreService } from '../../services/firebase/firestore.service'; 
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 hide : boolean = true;
 get email() {return this.registerForm.get('email')};
 get pass() {return this.registerForm.get('pass')};

 //nombre= new FormControl('', Validators.required);
 //passControl= new FormControl('');
emailControl = new FormControl('',[Validators.required,Validators.email]);

 public registerForm = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  pass: new FormControl('',[Validators.required, Validators.minLength(6)]),
  name: new FormControl('',Validators.required)
    })
  constructor(
    private firestoreService: FirestoreService,
    private registerService: RegisterService,
    private router : Router
   ) { }

  ngOnInit() {
  }
  register(){
    this.registerService.registerByUserEmail(this.registerForm.value.email, this.registerForm.value.pass).then(resp =>{
      const newRegisterBD: User = {
        email: resp.email,
        emailVerified: resp.emailVerified,
        name: this.registerForm.value.name,
        phoneNumber: resp.phoneNumber,
        uid: resp.uid
      }
      this.firestoreService.createUser(newRegisterBD).then(resp =>{
        this.router.navigate(["dashboard"]); 
      });
    }).catch(error =>{
      console.log(error);
    })
  }


}
