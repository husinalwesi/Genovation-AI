import { Component } from '@angular/core';
import { DoughnutChartComponent } from "../../modules/components/doughnut-chart/doughnut-chart.component";
import { CounterComponent } from "../../modules/components/counter/counter.component";
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { UserTimeComponent } from "../../modules/icons/user-time/user-time.component";
import { TableComponent } from "../../modules/components/table/table.component";
import { SharedService } from '../../serives/shared.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DoughnutChartComponent, CounterComponent, InputGroupModule, InputGroupAddonModule, ButtonModule, UserTimeComponent, TableComponent],
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
  isExpanded: boolean = true;
  isMobile: boolean = true;

  constructor(
    private sharedService: SharedService
  ){
    this.sharedService.currentPageMeta$.next({label: 'Dashboard', icon: 'dashboard'});
  }

  ngOnInit(): void{
    this.sharedService.sidebar$.subscribe((data: any) => {
      this.isExpanded = data.isExpanded;
      this.isMobile = data.isMobile;
    });
  }

}
