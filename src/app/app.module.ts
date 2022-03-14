import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { ActivityService } from "./activity/activity-service/activity.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { NgChartsModule } from "ng2-charts";
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";
import { ActivityComponent } from "./activity/activity.component";

@NgModule({
  declarations: [
    HomeComponent,
    HistoryComponent,
    ActivityComponent,
    AppComponent,
    NavComponent
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
