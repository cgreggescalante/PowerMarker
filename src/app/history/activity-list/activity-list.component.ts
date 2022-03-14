import { Component, OnInit } from '@angular/core';
import { Activity } from "../../activity/activity";
import { ActivityService } from "../../activity-service/activity.service";
import { BehaviorSubject, switchMap } from "rxjs";

@Component({
  selector: 'history-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
  providers: [ActivityService]
})
export class ActivityListComponent implements OnInit {
  per_page: Number = 25;
  activities: Activity[] = [];

  refreshActivities$ = new BehaviorSubject<boolean>(true);

  constructor(private activityService: ActivityService) {
    this.refreshActivities$.pipe(switchMap(_ => this.activityService.getActivities().then(
      activities =>
        this.activities = activities
    )));
  }

  ngOnInit() {
    this.activityService.getActivities().then(
      activities =>
        this.activities = activities
    );
  }
}
