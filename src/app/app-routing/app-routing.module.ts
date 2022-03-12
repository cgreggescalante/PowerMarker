import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { HistoryComponent } from "../history/history.component";
import { ActivityListEntryComponent } from "../activity-list-entry/activity-list-entry.component";
import { CommonModule } from "@angular/common";
import {ActivityDetailComponent} from "../activity-detail/activity-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'history', component: HistoryComponent },
  { path: 'activity/:id', component: ActivityDetailComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    HistoryComponent,
    ActivityListEntryComponent
  ],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
