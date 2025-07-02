import { Component } from '@angular/core';
import { SharedService } from '../../serives/shared.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  constructor(
    private sharedService: SharedService
  ){
    this.sharedService.currentPageMeta$.next({label: 'Dashboard', icon: 'dashboard'});
  }
}
