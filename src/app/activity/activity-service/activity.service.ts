import { Injectable } from '@angular/core';
import { Activity } from "../activity/activity";
import { Point } from "../point/point";
import { Distribution } from "../distribution/distribution";

type ActivityData = {
  summary: Activity;
  distributions: Distribution[]
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private url: string = 'http://127.0.0.1:3000/activity';

  constructor() { }

  async getActivities(): Promise<Activity[]> {
    const activities: Activity[] = [];

    const response = await fetch(this.url);
    const data = await response.json();

    Object.entries(data).forEach(entry => {
      const activity: Activity = Object.assign(new Activity(), entry[1]);
      activities.push(activity);
    });

    return activities;
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

  async getPoints(id: Number): Promise<Point[]> {
    const points: Point[] = [];

    const response = await fetch(this.url + '/' + id + '/points');
    const data = await response.json();

    Object.entries(data).forEach((value => {
      const point: Point = Object.assign(new Point(), value[1]);
      points.push(point);
    }));

    return points;
  }
}
