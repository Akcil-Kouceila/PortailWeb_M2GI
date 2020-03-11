import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog(result = null) {
    this.dialogRef.close(result);
  }

  ngOnInit() {}

  onCancel() {
    this.closeDialog();
  }

  onSave(data) {
    this.closeDialog(data);
  }
}
