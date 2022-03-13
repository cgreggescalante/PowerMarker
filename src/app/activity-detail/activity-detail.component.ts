import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ActivityService } from "../activity-service/activity.service";
import { Activity } from "../activity/activity";
import { Point } from "../point/point";
import {Distribution} from "../distribution/distribution";


@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  id: Number;

  activity: Activity | undefined;
  points: Point[] = [];
  distributions: Distribution[] = [];

  constructor(route: ActivatedRoute, private activityService: ActivityService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.activityService.getActivity(this.id).then(
      data => {
        this.activity = data.summary;
        this.distributions = data.distributions;
      }
    );

    this.activityService.getPoints(this.id).subscribe({
      next: points => {
        this.points = points;
      }
    })
  }
}
