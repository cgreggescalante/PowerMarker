import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Activity } from "../activity/activity";
import { of } from "rxjs";

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
      Object.assign(activity, data);
    });

    return of(activity);
  }
}
