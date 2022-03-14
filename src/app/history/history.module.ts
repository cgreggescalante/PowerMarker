import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityListComponent } from "./activity-list/activity-list.component";
import { ActivityListEntryComponent } from "./activity-list-entry/activity-list-entry.component";
import { HistoryRoutingModule } from "./history-routing/history-routing.module";


@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityListEntryComponent,
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
