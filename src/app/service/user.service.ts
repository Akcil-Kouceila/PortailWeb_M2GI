import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

import { USERS } from '../../assets/users.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore, private auth: AuthService) { }

  public getUsersMock(): Observable<User[]> {
    return of(USERS);
  }

  public getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges({idField: 'id'});
  }

  public setUser(user) {
    this.afs.collection<User>('users').doc(user.uid).set(user);
  }

  public getUser(): Observable<any> {
      return this.afs.collection<User>('users').doc(this.auth.user.uid).get();
  }
}
