import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent implements OnInit{
login: any;
  
  constructor(private formBuilder: FormBuilder){

  }
  loginForm!: FormGroup;
  ngOnInit(): void {

    // aqui digo en donde el campo de validatos que con un correo se autentica 
    this.loginForm = this.formBuilder.group({
      login:['',[Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(5)],
    });

  }
  get loginData(){
    return this.loginForm.get('login');
  
  }
get password(){
  return this.loginForm.get('password');
}
 
realizologin(){
  console.log('realizo el login', this.loginForm)
}


}
