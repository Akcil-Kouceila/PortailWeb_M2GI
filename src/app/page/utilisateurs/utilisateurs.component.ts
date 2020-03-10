import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/service/user.service';
import { Actualite } from '../../models/actualite.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  private addDialog: MatDialogRef<AddDialogComponent>;
  dialogStatus = 'inactive';

  public users: User[];

  constructor(private us: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.us.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  delete(user: any) {}

  add(user: any) {
    this.us.addUser(user.value);
  }

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AddDialogComponent, {
      width: '550px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe(user => {
      this.dialogStatus = 'inactive';
      if (user) {
        this.add(user);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    this.addDialog.close();
  }
}
