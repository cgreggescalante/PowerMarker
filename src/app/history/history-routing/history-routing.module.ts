import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityListComponent } from "../activity-list/activity-list.component";
import { CommonModule } from "@angular/common";
import {HistoryComponent} from "../history.component";

const routes: Routes = [
  { path: 'history', component: HistoryComponent, children: [
      {
        path: 'list', component: ActivityListComponent
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
