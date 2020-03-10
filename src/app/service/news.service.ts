import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actualite } from '../models/actualite.model';
import { Observable, of } from 'rxjs';

import { NEWS } from '../../assets/news.mock';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private afs: AngularFirestore) { }

  public getNewsMock(): Observable<Actualite[]> {
    return of(NEWS);
  }

  public getAllNews(): Observable<Actualite[]> {
    return this.afs.collection<Actualite>('news').valueChanges({idField: 'id'});
  }

  public addNews(actu): Observable<Actualite> {
    this.afs.collection<Actualite>('news').add(actu);
    return null;
  }
}
