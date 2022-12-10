import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskColumnComponent } from './task-list/task-column/task-column.component';
import { TaskCardComponent } from './task-list/task-card/task-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskColumnComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule,
    TaskManagerRoutingModule
  ],
  exports: [
    DragDropModule,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TaskManagerModule { }
