import { Component } from '@angular/core';
import { SharedService } from '../../serives/shared.service';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
export class InvoicesComponent {
  constructor(
    private sharedService: SharedService
  ){
    this.sharedService.currentPageMeta$.next({label: 'Invoices', icon: 'invoices'});
  }
}
