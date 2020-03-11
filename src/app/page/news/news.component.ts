import { Component, OnInit } from '@angular/core';
import { Actualite } from '../../models/actualite.model';
import { NewsService } from 'src/app/service/news.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddDialogComponent } from '../dialog-add-news/add-dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private addDialog: MatDialogRef<AddDialogComponent>;
  dialogStatus = 'inactive';

  public news: Actualite[];
  public role: string;

  constructor(private as: NewsService,  public dialog: MatDialog) {}

  ngOnInit() {
    this.as.getAllNews().subscribe(data => {
      this.news = data;
    });
    this.role = JSON.parse( localStorage.getItem('userData') ).role;
  }

  add(actu: any) {
    this.as.addNews(actu.value);
  }

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AddDialogComponent, {
      width: '550px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe(actu => {
      this.dialogStatus = 'inactive';
      if (actu) {
        this.add(actu);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    this.addDialog.close();
  }
}
