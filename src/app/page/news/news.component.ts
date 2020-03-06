import { Component, OnInit } from '@angular/core';
import { Actualite } from '../../models/actualite.model';
import { NewsService } from 'src/app/service/news.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news: Actualite[];

  constructor(private as: NewsService) { }

  ngOnInit() {
    this.as.getNewsMock().subscribe(data => {
      this.news = data;
    });
  }
}
