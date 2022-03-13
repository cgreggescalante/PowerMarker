import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Activity } from "../activity/activity";
import { of } from "rxjs";
import {Point} from "../point/point";

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

  getActivity(id: Number) {
    let activity: Activity = new Activity();

    this.http.get(this.url + "/" + id).subscribe((data) => {
      console.log(data);
      Object.assign(activity, data);
    });

    return of(activity);
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
