import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { CommonModule } from "@angular/common";
import { ActivityDetailComponent } from "../activity-detail/activity-detail.component";
import { HistoryComponent } from "../history/history.component";
import {HistoryModule} from "../history/history.module";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'history', component: HistoryComponent },
  { path: 'activity/:id', component: ActivityDetailComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    HistoryComponent
  ],
  imports: [RouterModule.forRoot(routes), CommonModule, HistoryModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
