import { Location } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss'
})
export class ActionBarComponent {
  @Output() onResetForm: EventEmitter<any> = new EventEmitter();  
  constructor(private location: Location) {}


  backBtn(){
    this.location.back();
  }

  resetForm(){
    this.onResetForm.emit();
  }

}
