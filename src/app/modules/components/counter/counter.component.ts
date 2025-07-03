import { Component, Input } from '@angular/core';
import { CounterData } from '../../../interfaces/interface';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() input: CounterData = {
    value: 0,
    label: ''
  };
}
