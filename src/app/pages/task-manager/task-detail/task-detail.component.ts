import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  public
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<TaskDetailComponent>,
  ) { }

  ngOnInit(): void {
  }
  public closeFormDialog(close: any) {
    this.dialogRef.close(close);
  }
  public handleChangeInput(event) {
  }

}
