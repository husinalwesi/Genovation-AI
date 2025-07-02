import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent {
  data!: any;
  options: any = {
      cutout: '80%',
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    };
  plugins!: any;

  @Input() input: any = {
    value: 0,
    outOf: 0,
    label: ''
  };

  calculatePercentage(){
    const value = Number(this.input.value);
    const outOf = Number(this.input.outOf);

    if (outOf === 0) {
      return 0;
    } else if(value > outOf){
      return 100;
    } else {
      const percentage = Math.trunc((value / outOf) * 100);
      return percentage;
    }
  }

  ngOnInit() {
  const valueText = this.calculatePercentage();
    this.plugins = [{
    id: 'centerText',
    afterDraw(chart:any) {
      const { ctx, chartArea: { left, top, width, height } } = chart;
      ctx.save();
      ctx.font = '700 14px Poppins';
      ctx.fillStyle = '#00C5D6';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(valueText + '%', left + width / 2, top + height / 2);
      ctx.restore();
    }
  }];
    this.data = {
      datasets: [
        {
          data: [valueText, 100 - valueText],
          backgroundColor: ['#00C5D6B3', 'transparent'],
          borderWidth: 0, 
          borderRadius: 50
        }
      ]
    };
  }
}
