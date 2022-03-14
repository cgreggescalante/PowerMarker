import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { HttpClientModule } from "@angular/common/http";
import { ActivityService } from "./activity-service/activity.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { DistributionChartComponent } from './distribution-chart/distribution-chart.component';
import { NgChartsModule } from "ng2-charts";
import { PointChartComponent } from './point-chart/point-chart.component';
import {HomeComponent} from "./home/home.component";
import {HistoryComponent} from "./history/history.component";

@NgModule({
  declarations: [
    HomeComponent,
    HistoryComponent,
    AppComponent,
    NavComponent,
    ActivityDetailComponent,
    DistributionChartComponent,
    PointChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [
    ActivityService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
