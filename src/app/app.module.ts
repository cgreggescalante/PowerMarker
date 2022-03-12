import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { HttpClientModule } from "@angular/common/http";
import { ActivityService } from "./activity-service/activity.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
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
