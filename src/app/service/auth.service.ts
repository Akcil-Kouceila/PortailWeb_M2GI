import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { User as UserData } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;
  userData: UserData;
  redirectUrl: string;

  constructor(private afs: AngularFirestore, private afas: AngularFireAuth, public router: Router) {
    this.afas.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.afs
        .collection('users')
        .doc(user.uid)
        .snapshotChanges().subscribe(res => {
          if (res) {
            const userData = res.payload.data() as UserData;
            localStorage.setItem('userData', JSON.stringify(userData));
          } else {
            localStorage.setItem('userData', null);
          }
        });
      } else {
        localStorage.setItem('user', null);
        localStorage.setItem('userData', null);
      }
    });
  }

  public signin(email: string, password: string) {
    this.afas.auth.signInWithEmailAndPassword(email, password);
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  public signout() {
    this.afas.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
