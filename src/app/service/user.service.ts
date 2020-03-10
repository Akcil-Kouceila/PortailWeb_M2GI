import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';

import { USERS } from '../../assets/users.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  public getUsersMock(): Observable<User[]> {
    return of(USERS);
  }

  public getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges({idField: 'id'});
  }

  public addUser(user): Observable<User> {
    this.afs.collection<User>('news').add(user);
    return null;
  }
}
