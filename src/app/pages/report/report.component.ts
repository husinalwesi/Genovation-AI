import { Component } from '@angular/core';
import { SharedService } from '../../serives/shared.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  constructor(
    private sharedService: SharedService
  ){
    this.sharedService.currentPageMeta$.next({label: 'Report', icon: 'report'});
  }
}
