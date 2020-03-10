import { Component, OnInit, Input } from '@angular/core';
import { Actualite } from '../../models/actualite.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogEditNewsComponent } from '../dialog-edit-news/dialog-edit-news.component';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

  private addDialog: MatDialogRef<DialogEditNewsComponent>;
  dialogStatus = 'inactive';

  @Input() actu: Actualite;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  set(actu: Actualite) {}

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(DialogEditNewsComponent, {
      width: '550px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe(actu => {
      this.dialogStatus = 'inactive';
      if (actu) {
        this.set(actu);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    this.addDialog.close();
  }
}
