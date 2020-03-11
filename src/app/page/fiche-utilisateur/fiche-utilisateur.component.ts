import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/service/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-fiche-utilisateur',
  templateUrl: './fiche-utilisateur.component.html',
  styleUrls: ['./fiche-utilisateur.component.css']
})
export class FicheUtilisateurComponent implements OnInit {

  private addDialog: MatDialogRef<DialogEditUserComponent>;
  dialogStatus = 'inactive';

  @Input() user: User;
  userRole: string;

  constructor(private as: UserService, public auth: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.as.getUser().subscribe((userData) => {
      this.userRole = userData.role;
    });
  }

  set(user: User) {
    this.as.setUser(user);
  }

  showDialog(user: User) {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(DialogEditUserComponent, {
      width: '550px',
      data: {usData: user}
    });

    this.addDialog.afterClosed().subscribe(us => {
      this.dialogStatus = 'inactive';
      if (us) {
        this.set(us);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    this.addDialog.close();
  }
}
