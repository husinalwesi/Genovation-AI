import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DraggableComponent } from '../../icons/draggable/draggable.component';
import { LightningComponent } from '../../icons/lightning/lightning.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ColumnsPlusLeftComponent } from '../../icons/columns-plus-left/columns-plus-left.component';
import { ColumnConfig, DdlOption, SortMeta, TableConfig, VehicleTableRow } from '../../../interfaces/interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, DraggableComponent, LightningComponent, DropdownModule, ReactiveFormsModule, RouterLink, ButtonModule, ColumnsPlusLeftComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() tableBody: VehicleTableRow[] = [];
  statusList: DdlOption[] = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' },
  ];
  form: FormGroup;
  table: TableConfig = {
    head: [
      {
        field: 'vehicle',
        header: 'Vehicle',
        sortable: true,
        reorderable: true,
      },
      {
        field: 'plateNum',
        header: 'Plate Num.',
        sortable: true,
        reorderable: true,
      },
      {
        field: 'odometer',
        header: 'Odometer',
        sortable: false,
        reorderable: true,
      },
      { field: 'gps', header: 'GPS', sortable: false, reorderable: true },
      { field: 'device', header: 'Device', sortable: false, reorderable: true },
      { field: 'sim', header: 'SIM', sortable: false, reorderable: true },
      { field: 'fleet', header: 'Fleet', sortable: false, reorderable: true },
      { field: 'status', header: 'Status', sortable: false, reorderable: true },
    ] as ColumnConfig[],
    body: [] as VehicleTableRow[],
  };
  multiSortMeta: SortMeta[] = [
    { field: 'vehicle', order: -1 },
    { field: 'plateNum', order: -1 },
  ];  

  constructor(
    private messageService: MessageService
  ) {
    this.form = new FormGroup({
      selectedStatus: new FormControl('active'),
    });
  }

  ngOnInit() {
    this.table.body = this.tableBody;
  }

  ddlChange(){
    this.messageService.add({ severity: 'contrast', summary: 'Status Updated', detail: 'The status has been changed successfully.', life: 3000 });
  }

}
