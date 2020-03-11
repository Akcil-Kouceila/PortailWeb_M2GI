import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msgError = '';
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const email: string = this.loginForm.get('email').value;
    const password: string = this.loginForm.get('password').value;
    this.auth.signin(email, password).then(
      () => {
        this.router.navigate(['dashboard']);
      },
      (error) => {
        this.msgError = 'Adresse mail ou mot de passe invalide';
      }
    );
  }
}
