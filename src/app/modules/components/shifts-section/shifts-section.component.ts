import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ShiftDetailsComponent } from '../shift-details/shift-details.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ShiftData } from '../../../interfaces/interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-shifts-section',
  standalone: true,
  imports: [InputGroupModule, InputGroupAddonModule, ButtonModule, ShiftDetailsComponent, ReactiveFormsModule],
  templateUrl: './shifts-section.component.html',
  styleUrl: './shifts-section.component.scss'
})
export class ShiftsSectionComponent {
  @Input() shifts: ShiftData[] = [];
  form: FormGroup;

  constructor(
    private messageService: MessageService
  ){
    this.form = new FormGroup({
      search: new FormControl(''),
    });
  }  

  // onSubmit() {
  //   console.log('submitted');
  //   console.log('Search value:', this.form.get('search')?.value);
  //   this.messageService.add({ severity: 'contrast', summary: 'Search', detail: 'Results have been loaded successfully.', life: 3000 });
  // }

  import(){
    this.messageService.add({ severity: 'contrast', summary: 'Upload Completed', detail: 'Your file has been successfully uploaded.', life: 3000 });
  }

  export(){
    this.messageService.add({ severity: 'contrast', summary: 'Export Completed', detail: 'Your data has been successfully exported.', life: 3000 });
  }

}
