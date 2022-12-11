import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskColumnComponent } from './task-list/task-column/task-column.component';
import { TaskCardComponent } from './task-list/task-card/task-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from '@app/modules/material.module';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskColumnComponent,
    TaskCardComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TaskManagerRoutingModule
  ],
  exports: [
    DragDropModule,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TaskManagerModule { }
