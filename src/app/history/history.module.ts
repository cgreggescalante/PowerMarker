import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from "./activity-list/activity-list.component";
import { ActivityListEntryComponent } from "./activity-list-entry/activity-list-entry.component";


@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityListEntryComponent
  ],
  exports: [
    ActivityListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HistoryModule { }
