import { Component, Input, OnInit } from '@angular/core';
import { Activity } from "../../activity/activity";

@Component({
  selector: 'app-activity-list-entry',
  templateUrl: './activity-list-entry.component.html',
  styleUrls: ['./activity-list-entry.component.css']
})
export class ActivityListEntryComponent implements OnInit {
  @Input() activity: Activity | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
