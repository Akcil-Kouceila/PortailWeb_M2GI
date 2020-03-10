import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  private roleUser = '';

  constructor(private afas: AngularFireAuth) { }

  public getRoleUser() {
    return this.roleUser;
  }

  public signin(email: string, password: string): any {


    /*let rolesUser = [];
  if (loginForm.username === 'admin') {
    rolesUser = ['READ','WRITE'];
  } else if (loginForm.username === 'lecteur') {
    rolesUser = ['READ'];
  } else if (loginForm.username === 'redacteur') {
    rolesUser = ['WRITE'];
  }
  this.setUser({login : loginForm.username, roles : rolesUser});*/


    this.afas.auth.signInWithEmailAndPassword(email, password).then(
      () => { this.roleUser = 'Admin'; },
      (error) => { this.roleUser = ''; },
    ).finally(() => this.roleUser);
  }

  public signout() {
    this.afas.auth.signOut();
    this.roleUser = '';
  }
}
