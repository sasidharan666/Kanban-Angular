import { NgModule } from '@angular/core';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import {  } from '@angular/platform-browser'
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations'
import { CommonModule } from '@angular/common';
@NgModule({
  exports: [KanbanModule,CommonModule,BreadcrumbModule,]
})
export class SyncfusionKanbanModule {}
