import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators,  } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
  hide : boolean = true;
  usuarioControl= new FormControl('', Validators.required);
  passControl= new FormControl('',Validators.required);
  emailControl = new FormControl('',[Validators.required,Validators.email,]);

 public loginForm = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl('')
    })

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit() {

  }

  onLogin(){
    console.log('submit form', this.loginForm.value);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.pass).then(resp => {
      console.log('resp promise campo ts -->', resp);
    }).catch(error => {
      console.error('promise -->', error);
    });
  }
  logout(){
    this.loginService.logout().then(resp => {
    console.log('logout ok -->', resp );
    }).catch(error =>{
      console.error('logout error -->', error);

    })
  }
}
