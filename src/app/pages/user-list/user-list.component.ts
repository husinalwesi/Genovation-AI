import { Component } from '@angular/core';
import { SharedService } from '../../serives/shared.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  constructor(
    private sharedService: SharedService
  ){
    this.sharedService.currentPageMeta$.next({label: 'Users', icon: 'users'});
  }
}
