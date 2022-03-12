import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ActivityService} from "../activity-service/activity.service";
import {Activity} from "../activity/activity";

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  id: Number;

  activity: Activity | undefined;

  constructor(route: ActivatedRoute, private activityService: ActivityService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.activityService.getActivity(this.id).subscribe({
      next: activity => {
        this.activity = activity;
      }
    })
  }

}
