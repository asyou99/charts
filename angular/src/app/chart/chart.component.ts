import {Component, Input, OnInit} from '@angular/core';
import {Department, IntervalVariationSeries} from '../shared/interfaces';
import {ChartType} from 'chart.js';
import {MultiDataSet, Label} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() department: IntervalVariationSeries;

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  departmentName: string;
  sum: number;
  doughnutChartOptions: any;

  constructor() {
  }

  ngOnInit() {

    this.iterateData();
  }

  iterateData() {

    const oldJsThis = this;

    this.departmentName = Object.keys(this.department)[0];

    this.doughnutChartOptions = {
      legend:
        {
          display: true,
          position: 'right',
          labels: {
            boxWidth: 20,
            fontSize: 16,
          }
        },
      tooltips: {
        callbacks: {
          title(tooltipItem, data) {

            const num = data.datasets[0].data[tooltipItem[0].index];

            return ((num / oldJsThis.sum) * 100).toFixed(2) + '%';
          },
        }
      },
    };

    for (const [key, value] of Object.entries(this.department)) {

      this.sum = value.sum;

      delete value.sum;

      this.doughnutChartLabels = Object.keys(value);

      this.doughnutChartData = Object.values(value);

    }
  }
}
