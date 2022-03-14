import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { CommonModule } from "@angular/common";
import { ActivityDetailComponent } from "../activity-detail/activity-detail.component";
import { HistoryModule } from "../history/history.module";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', loadChildren: () => import(`../history/history.module`).then(m => m.HistoryModule) },
  { path: 'activity/:id', component: ActivityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false }), CommonModule, HistoryModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
