import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityDetailComponent } from "./activity-detail/activity-detail.component";
import { DistributionChartComponent } from "./distribution-chart/distribution-chart.component";
import { PointChartComponent } from "./point-chart/point-chart.component";
import { ActivityRoutingModule } from "./activity-routing/activity-routing.module";


@NgModule({
  declarations: [
    ActivityDetailComponent,
    DistributionChartComponent,
    PointChartComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
