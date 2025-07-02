import { Component } from '@angular/core';
import { DoughnutChartComponent } from "../../modules/components/doughnut-chart/doughnut-chart.component";
import { CounterComponent } from "../../modules/components/counter/counter.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DoughnutChartComponent, CounterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  doughnutCharts: any = [
    {
      value: 300,
      outOf: 302,
      label: 'Active \n Trips'
    },
    {
      value: 375,
      outOf: 500,
      label: 'Active \n Vehicles'
    },
    {
      value: 16,
      outOf: 20,
      label: 'Under \n Maintenance'
    }    
  ];

  counters: any = [
    {
      value: 2,
      label: 'In-Active Trips'
    },
    {
      value: 100,
      label: 'Stopped Vehicles'
    },
    {
      value: 4,
      label: 'Queue Maintenance'
    },
    {
      value: 7,
      label: 'Total Departments'
    },
    {
      value: 60,
      label: 'Total Fleets'
    },
    {
      value: 300,
      label: 'Total Drivers'
    }
  ];  

}
