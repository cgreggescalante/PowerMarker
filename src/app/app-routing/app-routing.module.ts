import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { CommonModule } from "@angular/common";
import { HistoryModule } from "../history/history.module";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', loadChildren: () => import(`../history/history.module`).then(m => m.HistoryModule) },
  { path: 'activity', pathMatch: 'prefix', loadChildren: () => import(`../activity/activity.module`).then(m => m.ActivityModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false }), CommonModule, HistoryModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
