import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Activity } from "../activity/activity";
import {of} from "rxjs";
import {Point} from "../point/point";
import {Distribution} from "../distribution/distribution";

type ActivityData = {
  summary: Activity;
  distributions: Distribution[]
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private url: string = 'http://127.0.0.1:3000/activity';

  constructor(
    private http: HttpClient
  ) { }

  getActivities() {
    const activities: Activity[] = [];

    this.http.get(this.url).subscribe((data) => {
      Object.entries(data).forEach(entry => {
          const activity: Activity = Object.assign(new Activity(), entry[1]);
          activities.push(activity);
      });
    });

    return of(activities);
  }

  async getActivity(id: Number): Promise<ActivityData> {
    let activity: Activity = new Activity();
    const powerDistribution: Distribution = new Distribution('Power');

    const response = await fetch(this.url + '/' + id);
    const data = await response.json();

    Object.assign(activity, data.summary);
    powerDistribution.setBuckets(data.power_distribution);

    return {
      summary: activity,
      distributions: [powerDistribution]
    };
  }

  getPoints(id: Number) {
    const points: Point[] = [];

    this.http.get(this.url + '/' + id + '/points').subscribe((data) => {
      Object.entries(data).forEach((value) => {
        const point: Point = Object.assign(new Point(), value[1]);
        points.push(point);
      });
    });

    return of(points);
  }
}
