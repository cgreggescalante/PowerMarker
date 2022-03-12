import { Component, OnInit } from '@angular/core';
import { Activity } from "../activity/activity";
import { ActivityService } from "../activity-service/activity.service";
import { BehaviorSubject, Observable, switchMap } from "rxjs";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [ActivityService]
})
export class HistoryComponent implements OnInit {
  per_page: Number = 25;
  activities$: Observable<Activity[]> = new Observable<Activity[]>();

  refreshActivities$ = new BehaviorSubject<boolean>(true);

  constructor(private activityService: ActivityService) {
    this.activities$ = this.refreshActivities$.pipe(switchMap(_ => this.activityService.getActivities()));
  }

  ngOnInit() {
    this.activities$ = this.activityService.getActivities();
  }
}
