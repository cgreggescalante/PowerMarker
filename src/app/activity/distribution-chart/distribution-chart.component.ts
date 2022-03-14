import { Component, Input, OnInit } from '@angular/core';
import { Distribution } from "../distribution/distribution";
import { Chart } from "chart.js";

@Component({
  selector: 'activity-distribution-chart',
  templateUrl: './distribution-chart.component.html',
  styleUrls: ['./distribution-chart.component.css']
})
export class DistributionChartComponent implements OnInit {
  @Input() distribution: Distribution | undefined;



  constructor() { }

  ngOnInit(): void {
    if (this.distribution) {
      const canvas: HTMLElement | null = document.getElementById("chart");
      // @ts-ignore
      const context = canvas.getContext("2d");
      new Chart(context, {
        type: 'bar',
        data: {
          labels: this.distribution.getBucketLabels(),
          datasets: [{
            data: this.distribution.getBucketValues()
          }]
        },
        options: {}
      });
    }
  }

}
