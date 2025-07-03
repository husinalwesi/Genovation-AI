import { Component, Input } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { UserTimeComponent } from '../../icons/user-time/user-time.component';
import { ShiftData } from '../../../interfaces/interface';

@Component({
  selector: 'app-shift-details',
  standalone: true,
  imports: [UserTimeComponent, TableComponent],
  templateUrl: './shift-details.component.html',
  styleUrl: './shift-details.component.scss'
})
export class ShiftDetailsComponent {
  @Input() data!: ShiftData;
  @Input() searchKeyword: string = '';
}
