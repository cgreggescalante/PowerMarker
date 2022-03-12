import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { HttpClientModule } from "@angular/common/http";
import { ActivityService } from "./activity-service/activity.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ActivityService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
