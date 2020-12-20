import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators,  } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/firebase/login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private logged: boolean;
  hide : boolean = true;
  passControl= new FormControl('',Validators.required);
  emailControl = new FormControl('',[Validators.required,Validators.email,]);

 public loginForm = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl('')
    })

  constructor(
    private loginService: LoginService,
    private router:Router
  ) {}

  ngOnInit() { 
   
   }
  

  onLogin(){
    console.log('submit form', this.loginForm.value);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.pass).then(resp => {
      //console.log('resp promise campo ts -->', resp);
      
      this.router.navigate(["sidebar"]);
    }).catch(error => {
      console.error('promise -->', error);
    });
  }

  refresh(){
    window.location.reload();
  }
}
