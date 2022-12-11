import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskColumnComponent } from './task-list/task-column/task-column.component';
import { TaskCardComponent } from './task-list/task-card/task-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from '@app/modules/material.module';
import { viLocale } from "ngx-bootstrap/locale";
import { defineLocale } from "ngx-bootstrap/chronos";
import { BsDatepickerModule, BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, } from '@angular/forms';
defineLocale("vi", viLocale);

export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    containerClass: 'theme-dark-blue',
    dateInputFormat: 'DD/MM/YYYY'
  });
}




@NgModule({
  declarations: [
    TaskListComponent,
    TaskColumnComponent,
    TaskCardComponent,
    TaskDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    MaterialModule,
    TaskManagerRoutingModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    DragDropModule,
  ],
  providers: [
    { provide: BsDatepickerConfig, useFactory: getDatepickerConfig },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskManagerModule {
  constructor(
    private bsLocaleService: BsLocaleService,
  ) {
    this.bsLocaleService.use('vi');
  }
}
