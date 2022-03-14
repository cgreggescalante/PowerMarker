import { Component, Input, OnInit } from '@angular/core';
import { Point } from "../point/point";
import { Chart } from "chart.js";

@Component({
  selector: 'activity-point-chart',
  templateUrl: './point-chart.component.html',
  styleUrls: ['./point-chart.component.css']
})
export class PointChartComponent implements OnInit {
  @Input() points: Point[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.points) {
      const labels: string[] = [];
      const power: number[] = [];
      const heartRate: number[] = [];

      this.points.forEach(point => {
        labels.push(point.getTime());
        power.push(point.power);
        heartRate.push(point.heart_rate);
      });

      const canvas: HTMLElement | null = document.getElementById("point-chart");
      // @ts-ignore
      const context = canvas.getContext("2d");
      new Chart(context, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Power (w)',
              pointRadius: 0,
              data: power
            },
            {
              label: 'Heart Rate (BPM)',
              pointRadius: 0,
              data: heartRate
            }
          ]
        },
        options: {
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          hover: {
            mode: 'index',
            intersect: false
          }
        }
      });
    }
  }

}
