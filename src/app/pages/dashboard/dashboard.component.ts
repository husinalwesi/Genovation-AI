import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  data!: any;
  options!: any;
  plugins!: any;

  value = 75; // progress value in %
  ngOnInit() {
  const valueText = this.value;

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
          data: [this.value, 100 - this.value],
          backgroundColor: ['#00C5D6B3', 'transparent'], // adjust as needed
          borderWidth: 0, 
          borderRadius: 50 // <-- Rounded ends here!  
        }
      ]
    };

    this.options = {
      // radius: '50%',
      cutout: '80%', // to make the ring thin (can adjust 70-90%)
      // rotation: 0, // starts from top
      // circumference: 360,
      plugins: {
        // legend: {
        //   display: false,
        // },
        tooltip: {
          enabled: false
        }
      }
    };
  }

}
