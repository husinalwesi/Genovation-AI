import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DraggableComponent } from "../../icons/draggable/draggable.component";
import { LightningComponent } from "../../icons/lightning/lightning.component";
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ColumnsPlusLeftComponent } from "../../icons/columns-plus-left/columns-plus-left.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, DraggableComponent, LightningComponent, DropdownModule, ReactiveFormsModule, RouterLink, ButtonModule, ColumnsPlusLeftComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  cities: any[] = [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Pending', value: 'pending' }
    ];
  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      selectedCity: new FormControl('active'),
    });
  }

  table: any = {
    head: [
  { field: 'vehicle', header: 'Vehicle', sortable: true, reorderable: true },
  { field: 'plateNum', header: 'Plate Num.', sortable: true, reorderable: true },
  { field: 'odometer', header: 'Odometer', sortable: false, reorderable: true },
  { field: 'gps', header: 'GPS', sortable: false, reorderable: true },
  { field: 'device', header: 'Device', sortable: false, reorderable: true },
  { field: 'sim', header: 'SIM', sortable: false, reorderable: true },
  { field: 'fleet', header: 'Fleet', sortable: false, reorderable: true },
  { field: 'status', header: 'Status', sortable: false, reorderable: true },
  // { field: 'last', header: 'Status', sortable: false, reorderable: false }  
    ],
    body: [
    {
      "vehicleType": 'SUV',
      "vehicle": "Bus-9265",
      "vehicleLink": "/report",
      "plateNum": "04321",
      "odometer": "55,956 KM",
      "gps": "3-Nov-2024 &nbsp; 13:05:50",
      "device": "Teltonika", "deviceNo": "C03-96321",
      "sim": "Allowance \n 1.5GB",
      "fleet": "Q22",
      "status": "Active"
    },
    {
      "vehicleType": 'SUV',
      "vehicle": "Bus-9265",
      "vehicleLink": "/report",
      "plateNum": "04321",
      "odometer": "55,956 KM",
      "gps": "3-Nov-2024 &nbsp; 13:05:50",
      "device": "Teltonika", "deviceNo": "C03-96321",
      "sim": "Allowance \n 1.5GB",
      "fleet": "Q22",
      "status": "Active"
    },
    {
      "vehicleType": 'SUV',
      "vehicle": "Bus-9265",
      "vehicleLink": "/report",
      "plateNum": "04321",
      "odometer": "55,956 KM",
      "gps": "3-Nov-2024 &nbsp; 13:05:50",
      "device": "Teltonika", "deviceNo": "C03-96321",
      "sim": "Allowance \n 1.5GB",
      "fleet": "Q22",
      "status": "Active"
    },
    {
      "vehicleType": 'SUV',
      "vehicle": "Bus-9265",
      "vehicleLink": "/report",
      "plateNum": "04321",
      "odometer": "55,956 KM",
      "gps": "3-Nov-2024 &nbsp; 13:05:50",
      "device": "Teltonika", "deviceNo": "C03-96321",
      "sim": "Allowance \n 1.5GB",
      "fleet": "Q22",
      "status": "Active"
    }
    ]
  };
  multiSortMeta:any = [
    // order 1 is asc
    // order -1 is desc
  { field: 'vehicle', order: -1 },
  { field: 'plateNum', order: -1 }
];

    ngOnInit() {
    }
}
