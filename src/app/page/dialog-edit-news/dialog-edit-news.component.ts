import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-news',
  templateUrl: './dialog-edit-news.component.html',
  styleUrls: ['./dialog-edit-news.component.css']
})
export class DialogEditNewsComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogEditNewsComponent>) {}

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
