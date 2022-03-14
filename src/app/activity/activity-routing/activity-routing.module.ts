import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ActivityDetailComponent } from "../activity-detail/activity-detail.component";

const routes: Routes = [
  { path: ':id', component: ActivityDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
