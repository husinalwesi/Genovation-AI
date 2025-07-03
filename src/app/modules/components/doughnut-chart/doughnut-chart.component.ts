import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Chart, Plugin } from 'chart.js';
import { DoughnutChartData } from '../../../interfaces/interface';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  @Input() input: DoughnutChartData = {
    value: 0,
    outOf: 0,
    label: ''
  };

  data!: { datasets: Array<{ data: number[]; backgroundColor: string[]; borderWidth: number; borderRadius: number }> };
  options = {
    cutout: '80%',
    plugins: {
      tooltip: { enabled: false }
    }
  };

  plugins!: Plugin[];

  private calculatePercentage(): number {
    const { value, outOf } = this.input;
    if (outOf === 0) return 0;
    if (value > outOf) return 100;
    return Math.trunc((value / outOf) * 100);
  }

  ngOnInit() {
    const percentage = this.calculatePercentage();

    this.plugins = [{
      id: 'centerText',
      afterDraw: (chart: Chart) => {
        const { ctx, chartArea: { left, top, width, height } } = chart;
        ctx.save();
        ctx.font = '700 14px Poppins';
        ctx.fillStyle = '#00C5D6';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${percentage}%`, left + width / 2, top + height / 2);
        ctx.restore();
      }
    }];

    this.data = {
      datasets: [
        {
          data: [percentage, 100 - percentage],
          backgroundColor: ['#00C5D6B3', 'transparent'],
          borderWidth: 0,
          borderRadius: 50
        }
      ]
    };
  }
}
