import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(private afas: AngularFireAuth) { }

  public signin(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afas.auth.signInWithEmailAndPassword(email, password);
  }

  public signout() {
    this.afas.auth.signOut();
  }
}
