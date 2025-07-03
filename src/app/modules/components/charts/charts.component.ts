import { Component, Input } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { DoughnutChartData, CounterData } from '../../../interfaces/interface';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [DoughnutChartComponent, CounterComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  @Input() doughnutCharts: DoughnutChartData[] = [];
  @Input() counters: CounterData[] = [];
  @Input() totalCounters: CounterData[] = [];
}
