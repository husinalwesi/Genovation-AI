import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ShiftDetailsComponent } from '../shift-details/shift-details.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ShiftData } from '../../../interfaces/interface';

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

  constructor(){
    this.form = new FormGroup({
      search: new FormControl(''),
    });
  }  

  onSubmit() {
    console.log('submitted');
    console.log('Search value:', this.form.get('search')?.value);
  }

}
