import { Component } from '@angular/core';
import { SharedService } from '../../serives/shared.service';
import { ShiftsSectionComponent } from "../../modules/components/shifts-section/shifts-section.component";
import { ChartsComponent } from "../../modules/components/charts/charts.component";
import { DoughnutChartData, CounterData, ShiftData, VehicleTableRow } from '../../interfaces/interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ShiftsSectionComponent, ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  doughnutCharts: DoughnutChartData[] = [
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

  counters: CounterData[] = [
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

  totalCounters: CounterData[] = [
    {
      value: '43,303 km',
      label: 'Total Distance Driven'
    },
    {
      value: '291 hr : 23 min',
      label: 'Total Hours Driven'
    },
  ];

  shifts: ShiftData[] = [
    {
      shiftTitle: 'Afternoon Shift',
      time: '12:00 PM - 08:00 PM',
      table: this.getMockTableData()
    },
    {
      shiftTitle: 'Afternoon Shift',
      time: '12:00 PM - 08:00 PM',
      table: this.getMockTableData()
    }    
  ];

  constructor(
    private sharedService: SharedService
  ){
    this.sharedService.currentPageMeta$.next({label: 'Dashboard', icon: 'dashboard'});
  }

  ngOnInit(): void{
  }

  private getMockTableData(): VehicleTableRow[] {
    return Array.from({ length: 5 }, (item: VehicleTableRow, index: number) => ({
      vehicleType: 'SUV-' + index,
      vehicle: 'Bus-9265-' + index,
      vehicleLink: '/report',
      plateNum: '04321-' + index,
      odometer: '55,956 KM-' + index,
      gps: '3-Nov-2024 &nbsp; 13:05:50-' + index,
      device: 'Teltonika-' + index,
      deviceNo: 'C03-96321-' + index,
      sim: 'Allowance \n 1.5GB-' + index,
      fleet: 'Q22-' + index,
      status: 'Active'
    }));
  }  

}
