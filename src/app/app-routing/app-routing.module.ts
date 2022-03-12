import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { HistoryComponent } from "../history/history.component";
import { ActivityListEntryComponent } from "../activity-list-entry/activity-list-entry.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'history', component: HistoryComponent }
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
